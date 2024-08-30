import { WindowManagerAction, WindowManagerState } from './types';
import {
  activateWindow,
  closeWindow,
  createWindow,
  deactivateWindow,
  updateViewportMargins,
  updateViewportSize,
  updateWindow,
} from './updaters';

function reducer(
  state: WindowManagerState,
  { type, payload }: WindowManagerAction
): WindowManagerState {
  switch (type) {
    case 'ACTIVATE_WINDOW': {
      return activateWindow(state, payload);
    }
    case 'CLOSE_WINDOW': {
      return closeWindow(state, payload);
    }
    case 'CREATE_WINDOW': {
      return createWindow(state, payload);
    }
    case 'DEACTIVATE_WINDOW': {
      return deactivateWindow(state, payload);
    }
    case 'UPDATE_WINDOW': {
      return updateWindow(state, payload);
    }
    case 'UPDATE_VIEWPORT_MARGINS': {
      return updateViewportMargins(state, payload);
    }
    case 'UPDATE_VIEWPORT_SIZE': {
      return updateViewportSize(state, payload);
    }
    case 'MAXIMIZE_WINDOW': {
      let newState = activateWindow(state, payload);
      return updateWindow(newState, {
        id: payload,
        isMaximized: true,
      });
    }
    case 'MINIMIZE_WINDOW': {
      let newState = deactivateWindow(state, payload);
      return updateWindow(newState, {
        id: payload,
        isMinimized: true,
      });
    }
    case 'RESTORE_WINDOW': {
      let newState = activateWindow(state, payload);
      return updateWindow(newState, {
        id: payload,
        isMinimized: false,
      });
    }
    case 'UNMAXIMIZE_WINDOW': {
      let newState = activateWindow(state, payload);
      return updateWindow(newState, {
        id: payload,
        isMaximized: false,
      });
    }
    case 'SET_CONFIG': {
      return {
        ...state,
        config: payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
