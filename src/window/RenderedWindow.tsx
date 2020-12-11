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
  positionX,
  positionY,
  title,
  windowManager,
  width,
}: RenderedWindowProps): JSX.Element => (
  <Window
    isMaximized={id === windowManager.maximizedWindowId}
    onClick={() => windowManager.activateWindow(id)}
    height={height}
    positionX={positionX}
    positionY={positionY}
    width={width}
  >
    <TitleBar
      drag={(event) => windowManager.dragWindow(event, id)}
      isActive={id === windowManager.activeWindowId}
      isMaximized={id === windowManager.maximizedWindowId}
      unmaximize={() => windowManager.unmaximizeWindow(id)}
      maximize={() => windowManager.maximizeWindow(id)}
      title={title}
    />
    <WindowContent>{children}</WindowContent>
    <ResizeHandle
      onMouseDown={(event) => windowManager.resizeWindow(event, id)}
    />
  </Window>
);

export default RenderedWindow;
