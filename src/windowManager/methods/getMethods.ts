import { WispConfig } from '../../config';
import constructWindow from '../state/constructWindow';
import {
  Direction,
  WindowManager,
  WindowManagerMethods,
  WindowManagerState,
  WindowType,
} from '../types';
import { repositionWindow, resizeWindow } from './dimensionUtils';
import mouseDragHandler from './mouseDragHandler';

type Args = {
  config: WispConfig;
  createWindow(window: WindowType): void;
  getViewportHeight(): number;
  getViewportWidth(): number;
  setActiveWindowId(id: string): void;
  setWindowOrder(windowOrder: string[]): void;
  setWindows(windows: Map<string, WindowType>): void;
  state: WindowManagerState;
};

// TODO: Split to services
const getMethods = ({
  config,
  createWindow: _createWindow,
  getViewportHeight,
  getViewportWidth,
  setActiveWindowId,
  setWindowOrder,
  setWindows,
  state,
}: Args): WindowManagerMethods => {
  const updateWindow = (id: string, props: Partial<WindowType>) => {
    const updatedWindows = new Map(state.windows);
    updatedWindows.set(id, {
      ...state.windows.get(id),
      ...props,
    });
    setWindows(updatedWindows);
  };

  const activateWindow: WindowManager['activateWindow'] = (id) => {
    setActiveWindowId(id);
    setWindowOrder([
      ...state.windowOrder.filter((windowId) => windowId !== id),
      id,
    ]);
  };

  const createWindow: WindowManager['createWindow'] = (id, initialState) => {
    const window = constructWindow(config, id, initialState);
    _createWindow(window);
    return state.windows.get(window.id);
  };

  const closeWindow: WindowManager['closeWindow'] = (id) => {
    const updatedWindows = new Map(state.windows);
    updatedWindows.delete(id);
    setWindows(updatedWindows);
    setWindowOrder([
      ...state.windowOrder.filter((windowId) => windowId !== id),
    ]);
  };

  const maximizeWindow = (id: string) => {
    activateWindow(id);
    updateWindow(id, { isMaximized: true });
  };

  const unmaximizeWindow = (id: string) => {
    activateWindow(id);
    updateWindow(id, { isMaximized: false });
  };

  const minimizeWindow = (id: string) => {
    if (id === state.activeWindowId) setActiveWindowId(null);
    updateWindow(id, { isMinimized: true });
  };

  const restoreWindow = (id: string) => {
    activateWindow(id);
    updateWindow(id, { isMinimized: false });
  };

  const windowDragHandler = (event, id) => {
    activateWindow(id);
    const window = state.windows.get(id);
    if (!window.isDraggable || window.isMaximized) return;
    mouseDragHandler(event, window, (xOffset, yOffset) => {
      repositionWindow(
        window,
        xOffset,
        yOffset,
        getViewportWidth(),
        getViewportHeight()
      );
      updateWindow(id, window);
    });
  };

  const windowResizeHandler = (event, id, direction: Direction) => {
    activateWindow(id);
    const window = state.windows.get(id);
    if (!window.isResizable || window.isMaximized) return;
    mouseDragHandler(event, window, (xOffset, yOffset) => {
      resizeWindow(
        config,
        window,
        direction,
        xOffset,
        yOffset,
        getViewportWidth(),
        getViewportHeight()
      );
      updateWindow(id, window);
    });
  };

  return {
    activateWindow,
    closeWindow,
    createWindow,
    dragWindow: windowDragHandler,
    maximizeWindow,
    minimizeWindow,
    resizeWindow: windowResizeHandler,
    restoreWindow,
    unmaximizeWindow,
    updateWindow,
  };
};

export default getMethods;
