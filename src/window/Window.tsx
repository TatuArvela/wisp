import React, { useEffect } from 'react';

import { useWindowManager } from '../windowManager/hooks';
import { WindowType } from '../windowManager/types';
import ResizeBorder from './components/ResizeBorder';
import TitleBar from './components/TitleBar';
import WindowContent from './components/WindowContent';
import WindowElement from './components/WindowElement';
import { windowDragHandler } from './handlers/windowDragHandler';
import { windowResizeHandler } from './handlers/windowResizeHandler';

export interface WindowProps {
  children: React.ReactNode;
  id: string;
  // Altering the state post-mount is done with the windowManager API
  initialState?: Partial<WindowType>;
}

const Window: React.FC<WindowProps> = ({ children, id, initialState }) => {
  const windowManager = useWindowManager();
  const wmWindow = windowManager.windows.get(id);
  const orderNumber = windowManager.windowOrder.indexOf(id);

  useEffect(() => {
    if (!wmWindow) {
      windowManager.createWindow(id, initialState);
    }
    return () => windowManager.closeWindow(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!wmWindow || wmWindow.isClosed) {
    return null;
  }

  // Mutable copy for quick and iterative event handling
  const window = { ...wmWindow };

  const childrenWithWindow = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...window });
    }
    return child;
  });

  return (
    <WindowElement
      height={window.height}
      isMaximized={window.isMaximized}
      isMinimized={window.isMinimized}
      orderNumber={orderNumber}
      positionX={window.positionX}
      positionY={window.positionY}
      width={window.width}
      viewportWindowMargins={windowManager.viewportWindowMargins}
    >
      <TitleBar
        close={() => windowManager.closeWindow(id)}
        drag={windowDragHandler(windowManager, window)}
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
        {childrenWithWindow}
      </WindowContent>

      {window.isResizable && (
        <ResizeBorder resize={windowResizeHandler(windowManager, window)} />
      )}
    </WindowElement>
  );
};

export default Window;