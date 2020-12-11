import React from 'react';

import { WindowId, WindowProps, WindowType } from '../window/types';

export type ShellChildren =
  | React.ReactElement<WindowProps>
  | React.ReactElement<WindowProps>[];

export type WindowManager = {
  activeWindowId: WindowId;
  activateWindow(windowId: WindowId): void;
  dragWindow(event, windowId): void;
  resizeWindow(event, windowId): void;
  setWindowOrder(windowOrder: WindowId[]): void;
  setWindows(windows: Map<WindowId, WindowType>): void;
  windowOrder: WindowId[];
  windows: Map<WindowId, WindowType>;
};
