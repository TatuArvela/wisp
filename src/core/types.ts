import React from 'react';
import { Direction, WindowType } from 'window/types';

export type WindowManager = {
  activateWindow(id: string): void;
  activeWindowId: string;
  closeWindow(id: string): void;
  createWindow(props: Partial<WindowType> & { id: string }): WindowType;
  deleteWindow(id: string): void;
  dragWindow(event: React.MouseEvent, id: string): void;
  maximizeWindow(id: string): void;
  minimizeWindow(id: string): void;
  resizeWindow(event: React.MouseEvent, id: string, direction: Direction): void;
  restoreWindow(id: string): void;
  setWindowOrder(windowOrder: string[]): void;
  unmaximizeWindow(windowId: string): void;
  updateWindow(id: string, props: Partial<WindowType>): void;
  viewportRef: React.Ref<HTMLDivElement>;
  windowOrder: string[];
  windows: Map<string, WindowType>;
};

export type WispConfig = {
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
