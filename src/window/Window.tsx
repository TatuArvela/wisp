import FocusTrap from 'focus-trap-react';
import React, { useEffect } from 'react';

import { useWindowManager } from '../windowManager/hooks';
import { WindowType } from '../windowManager/types';
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
  id: string;
} & Partial<WindowType>;

export const Window: React.FC<WindowProps> = ({ children, ...windowProps }) => {
  const { id } = windowProps;
  const windowManager = useWindowManager();
  const wmWindow = windowManager.windows.get(id);
  const orderNumber = windowManager.windowOrder.indexOf(id);

  useEffect(() => {
    if (!wmWindow) {
      windowManager.createWindow(windowProps);
    }
    return () => windowManager.closeWindow(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
          viewportWindowMargins={windowManager.viewportWindowMargins}
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
