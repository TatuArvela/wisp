import type { WispConfig } from '../../config';
import { InitialWindow, ViewportMargins, WindowType } from '../types';

export interface WindowManagerState {
  activeWindowId: string | null;
  config: WispConfig;
  windows: Map<string, WindowType>;
  windowOrder: string[];
  viewportHeight: number | null;
  viewportWidth: number | null;
  viewportMargins: ViewportMargins;
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
  payload: InitialWindow;
}

interface DeactivateWindowAction {
  type: 'DEACTIVATE_WINDOW';
  payload: string;
}

interface UpdateWindowAction {
  type: 'UPDATE_WINDOW';
  payload: Pick<WindowType, 'id'> & Partial<WindowType>;
}

interface UpdateViewportMarginsAction {
  type: 'UPDATE_VIEWPORT_MARGINS';
  payload: Partial<ViewportMargins>;
}

interface UpdateViewportSizeAction {
  type: 'UPDATE_VIEWPORT_SIZE';
  payload: {
    height: number;
    width: number;
  };
}

interface MaximizeWindowAction {
  type: 'MAXIMIZE_WINDOW';
  payload: string;
}

interface MinimizeWindowAction {
  type: 'MINIMIZE_WINDOW';
  payload: string;
}

interface RestoreWindowAction {
  type: 'RESTORE_WINDOW';
  payload: string;
}

interface UnmaximizeWindowAction {
  type: 'UNMAXIMIZE_WINDOW';
  payload: string;
}

interface SetConfigAction {
  type: 'SET_CONFIG';
  payload: WispConfig;
}

export type WindowManagerAction =
  | ActivateWindowAction
  | CloseWindowAction
  | CreateWindowAction
  | DeactivateWindowAction
  | MaximizeWindowAction
  | MinimizeWindowAction
  | RestoreWindowAction
  | UpdateViewportMarginsAction
  | UnmaximizeWindowAction
  | UpdateViewportSizeAction
  | UpdateWindowAction
  | SetConfigAction;

export type ActionType = WindowManagerAction['type'];

export type ActionPayload = {
  [K in WindowManagerAction as K['type']]: K['payload'];
};
