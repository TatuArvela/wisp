import React from 'react';

import type { WispConfig } from '../config';
import type { Icon } from '../icons';

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
  payload: {
    config: WispConfig;
    props: InitialWindow;
  };
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

interface RefitWindowsAction {
  type: 'REFIT_WINDOWS';
  payload: {
    height: number;
    width: number;
  };
}

export type WindowManagerAction =
  | ActivateWindowAction
  | CloseWindowAction
  | CreateWindowAction
  | DeactivateWindowAction
  | UpdateWindowAction
  | SetViewportWindowMarginsAction
  | RefitWindowsAction;

export type BaseMethods = {
  activateWindow(id: string): void;
  closeWindow(id: string): void;
  createWindow(initial: InitialWindow): WindowType;
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
  alwaysShowCloseButton?: boolean;
  height: number;
  icon?: string | Icon;
  id: string;
  isClosable: boolean;
  isClosed: boolean;
  isDraggable: boolean;
  isInInitialAutomaticPosition: boolean;
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

export type InitialWindow = Pick<WindowType, 'id'> & Partial<WindowType>;

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
