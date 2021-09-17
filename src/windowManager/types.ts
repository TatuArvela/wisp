import React from 'react';

export type WindowManagerState = {
  activeWindowId: string | null;
  windows: Map<string, WindowType>;
  windowOrder: string[];
  windowMargins: WindowMargins;
};

type CreateWindowAction = { type: 'CREATE_WINDOW'; payload: WindowType };

type SetActiveWindowIdAction = {
  type: 'SET_ACTIVE_WINDOW_ID';
  payload: string;
};

type SetWindowOrderAction = {
  type: 'SET_WINDOW_ORDER';
  payload: string[];
};

type SetWindowsAction = {
  type: 'SET_WINDOWS';
  payload: Map<string, WindowType>;
};

export type WindowManagerAction =
  | CreateWindowAction
  | SetActiveWindowIdAction
  | SetWindowOrderAction
  | SetWindowsAction;

export type WindowManagerMethods = {
  activateWindow(id: string): void;
  // TODO: flashWindow
  // TODO: cascadeWindows
  closeWindow(id: string): void;
  createWindow(id: string, initialState: Partial<WindowType>): WindowType;
  dragWindow(event: React.MouseEvent, id: string): void; // TODO: Clearer name
  maximizeWindow(id: string): void;
  // TODO: maximizeWindowHorizontally
  // TODO: maximizeWindowVertically
  minimizeWindow(id: string): void;
  resizeWindow(event: React.MouseEvent, id: string, direction: Direction): void; // TODO: Clearer name
  restoreWindow(id: string): void;
  unmaximizeWindow(id: string): void;
  // TODO: unmaximizeWindowHorizontally
  // TODO: unmaximizeWindowVertically
  updateWindow(id: string, props: Partial<WindowType>): void;
  // TODO: dimWindow, to simulate crashed app
  // TODO: setWindowPositionX
  // TODO: setWindowPositionY
  // TODO: setWindowHeight
  // TODO: setWindowWidth
};

export type WindowManager = {
  viewportRef: React.Ref<HTMLDivElement>;
} & WindowManagerState &
  WindowManagerMethods;

export type WindowType = {
  height: number;
  id: string;
  isClosable: boolean;
  isClosed: boolean;
  isDraggable: boolean;
  isMaximizable: boolean;
  isMaximized: boolean;
  isMinimizable: boolean;
  isMinimized: boolean;
  isResizable: boolean;
  positionX: number;
  positionY: number;
  title: string;
  width: number;
};

export type WindowMargins = [
  top: number,
  right: number,
  bottom: number,
  left: number
];

export enum Direction {
  N = 'N',
  NE = 'NE',
  E = 'E',
  SE = 'SE',
  S = 'S',
  SW = 'SW',
  W = 'W',
  NW = 'NW',
}
