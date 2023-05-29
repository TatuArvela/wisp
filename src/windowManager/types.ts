import React from 'react';

export interface WindowManagerState {
  activeWindowId: string | null;
  windows: Map<string, WindowType>;
  windowOrder: string[];
  viewportWindowMargins: ViewportWindowMargins;
}

interface ActivateWindowAction {
  type: 'ACTIVATE_WINDOW';
  payload: string;
}

interface CloseWindowAction {
  type: 'CLOSE_WINDOW';
  payload: string;
}

interface CreateWindowAction {
  type: 'CREATE_WINDOW';
  payload: WindowType;
}

interface DeactivateWindowAction {
  type: 'DEACTIVATE_WINDOW';
  payload: string;
}

interface UpdateWindowAction {
  type: 'UPDATE_WINDOW';
  payload: {
    id: string;
    props: Partial<WindowType>;
  };
}

interface SetViewportWindowMarginsAction {
  type: 'SET_WINDOW_MARGINS';
  payload: Partial<ViewportWindowMargins>;
}

export type WindowManagerAction =
  | ActivateWindowAction
  | CloseWindowAction
  | CreateWindowAction
  | DeactivateWindowAction
  | UpdateWindowAction
  | SetViewportWindowMarginsAction;

export type BaseMethods = {
  activateWindow(id: string): void;
  closeWindow(id: string): void;
  createWindow(id: string, initialState: Partial<WindowType>): WindowType;
  deactivateWindow(id: string): void;
  getViewportHeight(): number;
  getViewportWidth(): number;
  setViewportWindowMargins(
    viewportWindowMargins: Partial<ViewportWindowMargins>
  ): void;
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
  // TODO: setWindowPositionX
  // TODO: setWindowPositionY
  // TODO: setWindowHeight
  // TODO: setWindowWidth
  // TODO: cascadeWindows
};

export interface WindowManagerBase extends WindowManagerState, BaseMethods {
  viewportRef: React.Ref<HTMLDivElement>;
}

export interface WindowManager extends WindowManagerBase, WindowStateMethods {}

export interface WindowType {
  height: number;
  icon?: WindowIcon;
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
  showAsTask: boolean;
  title: string;
  width: number;
}

export interface WindowIcon {
  [size: number]: string;
}

export interface ViewportWindowMargins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface Boundaries {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

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
