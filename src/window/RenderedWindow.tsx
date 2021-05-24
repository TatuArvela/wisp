import React from 'react';

import { WindowManager } from '../shell/types';
import ResizeBorder from './components/ResizeBorder';
import ResizeHandle from './components/ResizeHandle';
import TitleBar from './components/TitleBar';
import Window from './components/Window';
import WindowContent from './components/WindowContent';
import { WindowType } from './types';

type RenderedWindowProps = {
  window: WindowType;
  windowManager: WindowManager;
};

const RenderedWindow = ({
  window: {
    children,
    height,
    id,
    isClosable,
    isMaximizable,
    isMaximized,
    isMinimizable,
    isMinimized,
    isResizable,
    positionX,
    positionY,
    title,
    width,
  },
  windowManager,
}: RenderedWindowProps): JSX.Element => (
  <Window
    height={height}
    isMaximized={isMaximized}
    isMinimized={isMinimized}
    positionX={positionX}
    positionY={positionY}
    width={width}
  >
    <TitleBar
      close={() => windowManager.closeWindow(id)}
      drag={(event) => windowManager.dragWindow(event, id)}
      isActive={id === windowManager.activeWindowId}
      isClosable={isClosable}
      isMaximizable={isMaximizable}
      isMaximized={isMaximized}
      isMinimizable={isMinimizable}
      maximize={() => windowManager.maximizeWindow(id)}
      minimize={() => windowManager.minimizeWindow(id)}
      title={title}
      unmaximize={() => windowManager.unmaximizeWindow(id)}
    />

    <WindowContent onClick={() => windowManager.activateWindow(id)}>
      {children}
    </WindowContent>

    {isResizable && (
      <>
        <ResizeBorder
          resize={(event, direction) =>
            windowManager.resizeWindow(event, id, direction)
          }
        />
        <ResizeHandle
          resize={(event, direction) =>
            windowManager.resizeWindow(event, id, direction)
          }
        />
      </>
    )}
  </Window>
);

export default RenderedWindow;
