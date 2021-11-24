import { WindowManagerAction, WindowManagerState } from '../types';

function reducer(
  state: WindowManagerState,
  action: WindowManagerAction
): WindowManagerState {
  switch (action.type) {
    case 'ACTIVATE_WINDOW': {
      return {
        ...state,
        activeWindowId: action.payload,
        windowOrder: [
          ...state.windowOrder.filter(
            (windowId) => windowId !== action.payload
          ),
          action.payload,
        ],
      };
    }

    case 'CLOSE_WINDOW': {
      const windows = new Map(state.windows);
      windows.delete(action.payload);
      return {
        ...state,
        windows: windows,
        windowOrder: [...state.windowOrder].filter(
          (windowId) => windowId !== action.payload
        ),
      };
    }

    case 'CREATE_WINDOW': {
      return {
        ...state,
        windows: new Map(state.windows).set(action.payload.id, action.payload),
        windowOrder: state.windowOrder.concat(action.payload.id),
      };
    }

    case 'DEACTIVATE_WINDOW': {
      return {
        ...state,
        activeWindowId:
          action.payload === state.activeWindowId ? null : state.activeWindowId,
      };
    }

    case 'UPDATE_WINDOW': {
      const windows = new Map(state.windows);
      windows.set(action.payload.id, {
        ...state.windows.get(action.payload.id),
        ...action.payload.props,
      });
      return {
        ...state,
        windows: windows,
      };
    }

    case 'SET_WINDOW_MARGINS': {
      return {
        ...state,
        windowMargins: {
          ...state.windowMargins,
          ...action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
