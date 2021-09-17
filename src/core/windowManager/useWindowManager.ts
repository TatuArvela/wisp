import { WindowManager, WispConfig } from 'core/types';
import React, { useCallback } from 'react';
import { Direction, WindowType } from 'window/types';

import { repositionWindow, resizeWindow } from './dimensionUtils';
import initializeWindow from './initializeWindow';
import mouseDragHandler from './mouseDragHandler';
import {
  WindowManagerAction,
  windowManagerReducer,
  WindowManagerState,
} from './reducer';

export function useWindowManager(config: WispConfig): WindowManager {
  const [state, dispatch] = React.useReducer<
    React.Reducer<WindowManagerState, WindowManagerAction>
  >(windowManagerReducer, {
    activeWindowId: null,
    windows: new Map(),
    windowOrder: [],
  });

  const viewportRef = React.useRef<HTMLDivElement>();

  const getViewportWidth = useCallback(
    () => viewportRef.current?.offsetWidth || 0,
    [viewportRef]
  );
  const getViewportHeight = useCallback(
    () => viewportRef.current?.offsetHeight || 0,
    [viewportRef]
  );

  const setActiveWindowId = (id: string) =>
    dispatch({ type: 'SET_ACTIVE_WINDOW_ID', payload: id });

  const setWindows = (windows: Map<string, WindowType>) =>
    dispatch({ type: 'SET_WINDOWS', payload: windows });

  const setWindowOrder = (windowOrder: string[]) =>
    dispatch({ type: 'SET_WINDOW_ORDER', payload: windowOrder });

  const updateWindow = (id: string, props: Partial<WindowType>) => {
    const updatedWindows = new Map(state.windows);
    updatedWindows.set(id, {
      ...state.windows.get(id),
      ...props,
    });
    setWindows(updatedWindows);
  };

  const closeWindow: WindowManager['closeWindow'] = (id) => {
    if (id === state.activeWindowId) setActiveWindowId(null);
    updateWindow(id, { isClosed: true });
    setWindowOrder(state.windowOrder.filter((windowId) => windowId !== id));
  };

  const activateWindow: WindowManager['activateWindow'] = (id) => {
    setActiveWindowId(id);
    setWindowOrder([
      ...state.windowOrder.filter((windowId) => windowId !== id),
      id,
    ]);
  };

  const createWindow: WindowManager['createWindow'] = (props) => {
    const window = initializeWindow(config, props);
    dispatch({ type: 'CREATE_WINDOW', payload: window });
    return state.windows.get(window.id);
  };

  const deleteWindow: WindowManager['deleteWindow'] = (id) => {
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

  // FIXME
  // useLayoutEffect(() => {
  //   function updateAllWindowSizes() {
  //     console.log('Updated!');
  //     const updatedWindows = new Map(state.windows);
  //     const desktopWidth = getViewportWidth();
  //     const desktopHeight = getViewportHeight();
  //     updatedWindows.forEach((window) => {
  //       fitWindow(window, config, desktopWidth, desktopHeight);
  //       repositionWindow(window, 0, 0, desktopWidth, desktopHeight);
  //     });
  //     setWindows(updatedWindows);
  //   }
  //
  //   window.addEventListener('resize', updateAllWindowSizes);
  //   updateAllWindowSizes();
  //   return () => window.removeEventListener('resize', updateAllWindowSizes);
  //   // This only needs to fire once after all DOM mutations
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return {
    activeWindowId: state.activeWindowId,
    viewportRef,
    windowOrder: state.windowOrder,
    windows: state.windows,
    activateWindow,
    closeWindow,
    createWindow,
    deleteWindow,
    dragWindow: windowDragHandler,
    maximizeWindow,
    minimizeWindow,
    resizeWindow: windowResizeHandler,
    restoreWindow,
    setWindowOrder,
    unmaximizeWindow,
    updateWindow,
  };
}

export default useWindowManager;
