import React, { useEffect } from 'react';

import { useWindowManagerContext } from '../shell/windowManager/WindowManagerContext';
import ResizeBorder from './components/ResizeBorder';
import TitleBar from './components/TitleBar';
import WindowContent from './components/WindowContent';
import WindowElement from './components/WindowElement';
import { WindowType } from './types';

export type WindowProps = {
  children: React.ReactNode;
  id: string;
  title: string;
} & Partial<WindowType>;

const Window = ({ children, id, ...props }: WindowProps): JSX.Element => {
  const windowManager = useWindowManagerContext();
  const window = windowManager.windows.get(id);
  const orderNumber = windowManager.windowOrder.indexOf(id);

  useEffect(() => {
    if (!window) {
      windowManager.createWindow({ id, ...props });
    }
    return () => windowManager.deleteWindow(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!window || window.isClosed || window.isMinimized) {
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
