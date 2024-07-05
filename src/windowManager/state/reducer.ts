import refitWindow from '../../window/handlers/refitWindow';
import { getBoundaries } from '../../window/handlers/utils/dimensions';
import { WindowManagerAction, WindowManagerState, WindowType } from '../types';
import constructWindow from './constructWindow';

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
      const { config, props } = action.payload;
      const { id } = props;
      const window = constructWindow(config, state.windows, props);
      return {
        ...state,
        windows: new Map(state.windows).set(id, window),
        windowOrder: state.windowOrder.concat(id),
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
      const { id, props } = action.payload;
      const prevWindow = state.windows.get(id);

      const hasPositionChanged =
        (props.positionX && prevWindow.positionX !== props.positionX) ||
        (props.positionY && prevWindow.positionY !== props.positionY);
      const isInInitialAutomaticPosition =
        !hasPositionChanged && prevWindow.isInInitialAutomaticPosition;

      return {
        ...state,
        windows: new Map(state.windows).set(id, {
          ...prevWindow,
          ...props,
          isInInitialAutomaticPosition,
        }),
      };
    }

    case 'SET_WINDOW_MARGINS': {
      return {
        ...state,
        viewportWindowMargins: {
          ...state.viewportWindowMargins,
          ...action.payload,
        },
      };
    }

    case 'REFIT_WINDOWS': {
      const { width, height } = action.payload;
      const boundaries = getBoundaries({
        height,
        width,
        viewportWindowMargins: state.viewportWindowMargins,
      });
      const windows = Array.from(state.windows);

      const refittedWindows: [string, WindowType][] = windows.map(
        ([id, window]) => {
          const newWindow: WindowType = {
            ...window,
            ...refitWindow(window, boundaries),
          };
          return [id, newWindow];
        }
      );

      return {
        ...state,
        windows: new Map(refittedWindows),
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
