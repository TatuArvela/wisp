import type { Icon } from '../icons';
import { ActionPayload, WindowManagerState } from './state/types';

export type WindowManagerActions = {
  activateWindow(payload: ActionPayload['ACTIVATE_WINDOW']): void;
  closeWindow(payload: ActionPayload['CLOSE_WINDOW']): void;
  createWindow(payload: ActionPayload['CREATE_WINDOW']): void;
  deactivateWindow(payload: ActionPayload['DEACTIVATE_WINDOW']): void;
  maximizeWindow(payload: ActionPayload['MAXIMIZE_WINDOW']): void;
  minimizeWindow(payload: ActionPayload['MINIMIZE_WINDOW']): void;
  restoreWindow(payload: ActionPayload['RESTORE_WINDOW']): void;
  setViewportWindowMargins(
    payload: ActionPayload['UPDATE_VIEWPORT_MARGINS']
  ): void;
  unmaximizeWindow(payload: ActionPayload['UNMAXIMIZE_WINDOW']): void;
  updateWindow(payload: ActionPayload['UPDATE_WINDOW']): void;
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

export type WindowManager = WindowManagerState & WindowManagerActions;

export interface WindowType {
  alwaysShowCloseButton?: boolean;
  height: number;
  icon?: string | Icon;
  id: string;
  isBlocked: boolean;
  isClosable: boolean;
  isClosed: boolean;
  isDraggable: boolean;
  isInInitialAutomaticPosition: boolean;
  isMaximizable: boolean;
  isMaximized: boolean;
  isMinimizable: boolean;
  isMinimized: boolean;
  isBlockingParent: boolean;
  isResizable: boolean;
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number;
  minWidth?: number;
  parentId: string | null;
  positionX: number;
  positionY: number;
  showAsTask: boolean;
  title: string;
  width: number;
}

export type InitialWindow = Pick<WindowType, 'id'> & {
  isBlocked?: never;
  height?: number | 'auto';
  width?: number | 'auto';
} & Partial<Omit<WindowType, 'isBlocked' | 'height' | 'width'>>;

export interface ViewportMargins {
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
