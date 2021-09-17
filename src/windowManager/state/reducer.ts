import { WindowManagerAction, WindowManagerState } from '../types';

function reducer(
  state: WindowManagerState,
  action: WindowManagerAction
): WindowManagerState {
  switch (action.type) {
    case 'CREATE_WINDOW':
      return {
        ...state,
        windows: new Map(state.windows).set(action.payload.id, action.payload),
        windowOrder: state.windowOrder.concat(action.payload.id),
      };
    case 'SET_ACTIVE_WINDOW_ID':
      return {
        ...state,
        activeWindowId: action.payload,
      };
    case 'SET_WINDOW_ORDER':
      return {
        ...state,
        windowOrder: action.payload,
      };
    case 'SET_WINDOWS':
      return {
        ...state,
        windows: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
