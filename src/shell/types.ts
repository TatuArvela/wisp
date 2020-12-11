import React from 'react';

import { WindowType } from '../window/types';

export type WindowManager = {
  activateWindow(windowId: string): void;
  activeWindowId: string;
  dragWindow(event: React.MouseEvent, windowId: string): void;
  maximizeWindow(windowId: string): void;
  maximizedWindowId: string | null;
  resizeWindow(event: React.MouseEvent, windowId: string): void;
  unmaximizeWindow(windowId: string): void;
  setWindowOrder(windowOrder: string[]): void;
  setWindows(windows: Map<string, WindowType>): void;
  windowOrder: string[];
  windows: Map<string, WindowType>;
};

export type Config = {
  defaultWindowHeight: number;
  defaultWindowWidth: number;
  maxWindowHeight: number;
  maxWindowWidth: number;
  minWindowHeight: number;
  minWindowWidth: number;
  newWindowXOffset: number;
  newWindowYOffset: number;
  taskbarHeight: number;
};
