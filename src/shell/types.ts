import React from 'react';

import { Direction, WindowType } from '../window/types';

export type WindowManager = {
  activateWindow(windowId: string): void;
  activeWindowId: string;
  closeWindow(windowId: string): void;
  dragWindow(event: React.MouseEvent, windowId: string): void;
  maximizeWindow(windowId: string): void;
  minimizeWindow(windowId: string): void;
  resizeWindow(
    event: React.MouseEvent,
    windowId: string,
    direction: Direction
  ): void;
  restoreWindow(windowId: string): void;
  setWindowOrder(windowOrder: string[]): void;
  setWindows(windows: Map<string, WindowType>): void;
  unmaximizeWindow(windowId: string): void;
  windowOrder: string[];
  windows: Map<string, WindowType>;
};

export type Config = {
  defaultWindowHeight: number;
  defaultWindowWidth: number;
  disableTaskbar: boolean;
  disableVersionInformation: boolean;
  maxWindowHeight: number;
  maxWindowWidth: number;
  minWindowHeight: number;
  minWindowWidth: number;
  newWindowXOffset: number;
  newWindowYOffset: number;
  taskbarHeight: number;
  transparentBackground: boolean;
};
