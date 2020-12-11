import React from 'react';

import { WindowManager } from '../shell/types';
import ResizeHandle from './components/ResizeHandle';
import TitleBar from './components/TitleBar';
import Window from './components/Window';
import WindowContent from './components/WindowContent';
import { WindowType } from './types';

type RenderedWindowProps = WindowType & {
  windowManager: WindowManager;
};

const RenderedWindow = ({
  children,
  height,
  id,
  isMinimizable,
  isMinimized,
  positionX,
  positionY,
  title,
  width,
  windowManager,
}: RenderedWindowProps): JSX.Element => (
  <Window
    height={height}
    isMaximized={id === windowManager.maximizedWindowId}
    isMinimized={isMinimized}
    positionX={positionX}
    positionY={positionY}
    width={width}
  >
    <TitleBar
      drag={(event) => windowManager.dragWindow(event, id)}
      isActive={id === windowManager.activeWindowId}
      isMaximized={id === windowManager.maximizedWindowId}
      isMinimizable={isMinimizable}
      maximize={() => windowManager.maximizeWindow(id)}
      minimize={() => windowManager.minimizeWindow(id)}
      title={title}
      unmaximize={() => windowManager.unmaximizeWindow(id)}
    />
    <WindowContent onClick={() => windowManager.activateWindow(id)}>
      {children}
    </WindowContent>
    <ResizeHandle
      onMouseDown={(event) => windowManager.resizeWindow(event, id)}
    />
  </Window>
);

export default RenderedWindow;
