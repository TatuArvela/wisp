import { WindowType } from '../../window/types';

export type WindowManagerState = {
  activeWindowId: string | null;
  windows: Map<string, WindowType>;
  windowOrder: string[];
};

export type WindowManagerAction =
  | { type: 'SET_ACTIVE_WINDOW_ID'; payload: string }
  | { type: 'CLOSE_WINDOW' }
  | { type: 'CREATE_WINDOW'; payload: WindowType }
  | { type: 'SET_WINDOWS'; payload: Map<string, WindowType> }
  | { type: 'SET_WINDOW_ORDER'; payload: string[] };

export function windowManagerReducer(
  state: WindowManagerState,
  action: WindowManagerAction
): WindowManagerState {
  switch (action.type) {
    case 'SET_ACTIVE_WINDOW_ID':
      return {
        ...state,
        activeWindowId: action.payload,
      };
    case 'CLOSE_WINDOW':
      return state;
    case 'CREATE_WINDOW':
      return {
        activeWindowId: action.payload.id,
        windows: new Map(state.windows).set(action.payload.id, action.payload),
        windowOrder: state.windowOrder.concat(action.payload.id),
      };
    case 'SET_WINDOWS':
      return {
        ...state,
        windows: action.payload,
      };
    case 'SET_WINDOW_ORDER':
      return {
        ...state,
        windowOrder: action.payload,
      };
    default:
      return state;
  }
}
