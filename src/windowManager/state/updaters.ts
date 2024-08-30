import refitWindow from '../../window/handlers/refitWindow';
import { getBoundaries } from '../../window/handlers/utils/dimensions';
import { WindowType } from '../types';
import { getAllChildWindows, getRootParentId } from './childParentUtils';
import constructWindow from './constructWindow';
import { ActionPayload, WindowManagerState } from './types';

// TODO: complete child/parent window constraints

export function activateWindow(
  state: WindowManagerState,
  payload: ActionPayload['ACTIVATE_WINDOW']
) {
  const window = state.windows.get(payload);

  if (!window) {
    return state;
  }

  if (window.isBlocked) {
    const rootParentId = getRootParentId(payload, state.windows);
    const childWindows = getAllChildWindows(rootParentId, state.windows);

    if (childWindows.length > 0) {
      const childWindowIds = childWindows.map((window) => window.id);
      const childWindowOrder = state.windowOrder.filter((windowId) =>
        childWindowIds.includes(windowId)
      );
      const blockingChildWindowOrder = childWindowOrder.filter(
        (id) => childWindows.find((window) => window.id === id).isBlockingParent
      );
      const newActiveWindowId =
        blockingChildWindowOrder.length > 0
          ? blockingChildWindowOrder.at(-1)
          : payload;

      return {
        ...state,
        activeWindowId: newActiveWindowId,
        windowOrder: [
          ...state.windowOrder.filter(
            (windowId) => !childWindowOrder.includes(windowId)
          ),
          ...childWindowOrder,
        ],
      };
    }
  }

  return {
    ...state,
    activeWindowId: payload,
    windowOrder: [
      ...state.windowOrder.filter((windowId) => windowId !== payload),
      payload,
    ],
  };
}

export function closeWindow(
  state: WindowManagerState,
  payload: ActionPayload['CLOSE_WINDOW']
) {
  const closedWindowIndex = state.windowOrder.indexOf(payload);

  const newActiveWindowId =
    state.windowOrder
      .slice(0, closedWindowIndex)
      .reverse()
      .find((windowId) => {
        const windowInstance = state.windows.get(windowId);
        return (
          windowInstance &&
          !windowInstance.isClosed &&
          !windowInstance.isMinimized
        );
      }) || null;

  return {
    ...state,
    activeWindowId: newActiveWindowId,
    windows: new Map([...state.windows].filter(([key]) => key !== payload)),
    windowOrder: [...state.windowOrder].filter(
      (windowId) => windowId !== payload
    ),
  };
}

export function createWindow(
  state: WindowManagerState,
  payload: ActionPayload['CREATE_WINDOW']
) {
  const { id } = payload;
  const window = constructWindow(state.config, state.windows, payload);
  const shouldActivate = !window.isMinimized && !window.isClosed;

  return {
    ...state,
    activeWindowId: shouldActivate ? id : state.activeWindowId,
    windows: new Map(state.windows).set(id, window),
    windowOrder: state.windowOrder.concat(id),
  };
}

export function deactivateWindow(
  state: WindowManagerState,
  payload: ActionPayload['DEACTIVATE_WINDOW']
) {
  return {
    ...state,
    activeWindowId:
      payload === state.activeWindowId ? null : state.activeWindowId,
  };
}

export function updateWindow(
  state: WindowManagerState,
  payload: ActionPayload['UPDATE_WINDOW']
) {
  const { id, ...props } = payload;
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

export function updateViewportMargins(
  state: WindowManagerState,
  payload: ActionPayload['UPDATE_VIEWPORT_MARGINS']
) {
  let newState = {
    ...state,
    viewportMargins: payload,
  };
  newState = refitWindows(newState);
  return newState;
}

export function updateViewportSize(
  state: WindowManagerState,
  { width, height }: ActionPayload['UPDATE_VIEWPORT_SIZE']
) {
  let newState = {
    ...state,
    viewportHeight: height,
    viewportWidth: width,
  };
  newState = refitWindows(newState);
  return newState;
}

function refitWindows(state: WindowManagerState): WindowManagerState {
  const boundaries = getBoundaries(state);
  const windows = Array.from(state.windows);
  const refittedWindows: [string, WindowType][] = windows.map(
    ([id, window]) => [id, refitWindow(window, boundaries)]
  );
  return {
    ...state,
    windows: new Map(refittedWindows),
  };
}
