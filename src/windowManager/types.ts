import React from 'react';

export type WindowManagerState = {
  activeWindowId: string | null;
  windows: Map<string, WindowType>;
  windowOrder: string[];
  windowMargins: WindowMargins;
};

type ActivateWindowAction = { type: 'ACTIVATE_WINDOW'; payload: string };
type CloseWindowAction = { type: 'CLOSE_WINDOW'; payload: string };
type CreateWindowAction = { type: 'CREATE_WINDOW'; payload: WindowType };
type DeactivateWindowAction = { type: 'DEACTIVATE_WINDOW'; payload: string };
type UpdateWindowAction = {
  type: 'UPDATE_WINDOW';
  payload: {
    id: string;
    props: Partial<WindowType>;
  };
};
type SetWindowMarginsAction = {
  type: 'SET_WINDOW_MARGINS';
  payload: Partial<WindowMargins>;
};

export type WindowManagerAction =
  | ActivateWindowAction
  | CloseWindowAction
  | CreateWindowAction
  | DeactivateWindowAction
  | UpdateWindowAction
  | SetWindowMarginsAction;

export type BaseMethods = {
  activateWindow(id: string): void;
  closeWindow(id: string): void;
  createWindow(id: string, initialState: Partial<WindowType>): WindowType;
  deactivateWindow(id: string): void;
  getViewportHeight(): number;
  getViewportWidth(): number;
  setWindowMargins(windowMargins: Partial<WindowMargins>);
  updateWindow(id: string, props: Partial<WindowType>): void;
};

export type WindowStateMethods = {
  maximizeWindow(id: string): void;
  minimizeWindow(id: string): void;
  restoreWindow(id: string): void;
  unmaximizeWindow(id: string): void;
  // TODO: flashWindow
  // TODO: maximizeWindowHorizontally
  // TODO: maximizeWindowVertically
  // TODO: unmaximizeWindowHorizontally
  // TODO: unmaximizeWindowVertically
  // TODO: dimWindow, to simulate crashed app
};

export type WindowDimensionMethods = {
  dragWindow(event: React.MouseEvent, id: string): void; // TODO: Clearer name
  resizeWindow(event: React.MouseEvent, id: string, direction: Direction): void; // TODO: Clearer name
  // TODO: setWindowPositionX
  // TODO: setWindowPositionY
  // TODO: setWindowHeight
  // TODO: setWindowWidth
  // TODO: cascadeWindows
};

type WindowManagerMethods = BaseMethods &
  WindowStateMethods &
  WindowDimensionMethods;

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
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number;
  minWidth?: number;
  positionX: number;
  positionY: number;
  title: string;
  width: number;
};

// TODO: Think of a better name
export type WindowMargins = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type Boundaries = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

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
