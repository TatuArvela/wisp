import React, { useEffect } from 'react';

import { useWindowManager } from '../windowManager/hooks';
import { WindowType } from '../windowManager/types';
import ResizeBorder from './components/ResizeBorder';
import TitleBar from './components/TitleBar';
import WindowContent from './components/WindowContent';
import WindowElement from './components/WindowElement';

export type WindowProps = {
  children: React.ReactNode;
  id: string;
  // Altering the state post-mount is done with the windowManager API
  initialState: {
    title: string;
  } & Partial<WindowType>;
};

const Window: React.FC<WindowProps> = ({ children, id, initialState }) => {
  const windowManager = useWindowManager();
  // TODO: Return object with orderNumber and adjusted (if maximized) dimensions from window manager
  const window = windowManager.windows.get(id);
  const orderNumber = windowManager.windowOrder.indexOf(id);

  useEffect(() => {
    if (!window) {
      windowManager.createWindow(id, initialState);
    }
    return () => windowManager.closeWindow(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!window || window.isClosed) {
    return null;
  }

  return (
    <WindowElement
      height={window.height}
      isMaximized={window.isMaximized}
      isMinimized={window.isMinimized}
      orderNumber={orderNumber}
      positionX={window.positionX}
      positionY={window.positionY}
      width={window.width}
    >
      <TitleBar
        close={() => windowManager.closeWindow(id)}
        drag={(event) => windowManager.dragWindow(event, id)}
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

      <WindowContent onClick={() => windowManager.activateWindow(id)}>
        {children}
      </WindowContent>

      {window.isResizable && (
        <ResizeBorder
          resize={(event, direction) =>
            windowManager.resizeWindow(event, id, direction)
          }
        />
      )}
    </WindowElement>
  );
};

export default Window;
