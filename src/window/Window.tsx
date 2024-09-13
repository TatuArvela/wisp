import FocusTrap from 'focus-trap-react';
import React, { useEffect, useLayoutEffect, useRef } from 'react';

import {
  useWindowById,
  useWindowManager,
  useWindowOrderNumberById,
} from '../windowManager/hooks';
import { ActionPayload } from '../windowManager/state/types';
import { InitialWindow } from '../windowManager/types';
import ResizeBorder from './components/ResizeBorder';
import TitleBar from './components/TitleBar';
import WindowElement from './components/WindowElement';
import WindowElementContent from './components/WindowElementContent';
import { windowDragHandler } from './handlers/windowDragHandler';
import { windowResizeHandler } from './handlers/windowResizeHandler';
import { WindowProvider } from './WindowContext';

// Altering the state post-mount is done with the windowManager API
export type WindowProps = {
  children: React.ReactNode;
} & InitialWindow;

export const Window: React.FC<WindowProps> = ({ children, ...windowProps }) => {
  const { id } = windowProps;
  const windowManager = useWindowManager();
  const wmWindow = useWindowById(id);
  const orderNumber = useWindowOrderNumberById(id);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wmWindow) {
      windowManager.createWindow(windowProps);
    }
    return () => windowManager.closeWindow(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useLayoutEffect(() => {
    if (wmWindow && windowRef.current) {
      if (wmWindow.width === undefined || wmWindow.height === undefined) {
        const windowElementRect = windowRef.current.getBoundingClientRect();
        const windowUpdate: ActionPayload['UPDATE_WINDOW'] = {
          id,
          width: windowElementRect.width,
          height: windowElementRect.height,
        };
        windowManager.updateWindow(windowUpdate);
      }
    }
  }, [id, windowManager, wmWindow]);

  if (!wmWindow || wmWindow.isClosed) {
    return null;
  }

  // Mutable copy for quick and iterative event handling
  const window = { ...wmWindow };

  return (
    <WindowProvider value={wmWindow}>
      <FocusTrap
        active={id === windowManager.activeWindowId}
        focusTrapOptions={{
          allowOutsideClick: true,
        }}
      >
        <WindowElement
          height={window.height}
          id={window.id}
          isMaximized={window.isMaximized}
          isMinimized={window.isMinimized}
          orderNumber={orderNumber}
          positionX={window.positionX}
          positionY={window.positionY}
          ref={windowRef}
          viewportMargins={windowManager.viewportMargins}
          width={window.width}
        >
          <TitleBar
            alwaysShowCloseButton={window.alwaysShowCloseButton}
            close={() => windowManager.closeWindow(id)}
            drag={windowDragHandler(windowManager, window)}
            icon={window.icon}
            isActive={id === windowManager.activeWindowId}
            isClosable={window.isClosable}
            isMaximizable={window.isMaximizable}
            isMaximized={window.isMaximized}
            isMinimizable={window.isMinimizable}
            maximize={() => windowManager.maximizeWindow(id)}
            minimize={() => windowManager.minimizeWindow(id)}
            title={window.title}
            unmaximize={() => windowManager.unmaximizeWindow(id)}
          />

          <WindowElementContent
            onClick={() => windowManager.activateWindow(id)}
          >
            {children}
          </WindowElementContent>

          {window.isResizable && !window.isMaximized && (
            <ResizeBorder resize={windowResizeHandler(windowManager, window)} />
          )}

          <div
            tabIndex={0}
            style={{
              width: '0',
              height: '0',
              position: 'absolute',
              opacity: '0',
              outline: 'none',
            }}
            /* focus-trap-react always needs at least one tabbable element */
          />
        </WindowElement>
      </FocusTrap>
    </WindowProvider>
  );
};

export default Window;
