import React, { useCallback } from 'react';

import { WispConfig } from '../config';
import getMethods from './methods/getMethods';
import reducer from './state/reducer';
import {
  WindowManager,
  WindowManagerAction,
  WindowManagerState,
  WindowType,
} from './types';

function useWindowManager(
  config: WispConfig,
  viewportRef: React.MutableRefObject<HTMLDivElement>
): WindowManager {
  const [state, dispatch] = React.useReducer<
    React.Reducer<WindowManagerState, WindowManagerAction>
  >(reducer, {
    activeWindowId: null,
    windowMargins: config.windowMargins,
    windowOrder: [],
    windows: new Map(),
  });

  const createWindow = (window: WindowType) =>
    dispatch({
      type: 'CREATE_WINDOW',
      payload: window,
    });

  const setActiveWindowId = (id: string) =>
    dispatch({
      type: 'SET_ACTIVE_WINDOW_ID',
      payload: id,
    });

  const setWindowOrder = (windowOrder: string[]) =>
    dispatch({
      type: 'SET_WINDOW_ORDER',
      payload: windowOrder,
    });

  const setWindows = (windows: Map<string, WindowType>) =>
    dispatch({
      type: 'SET_WINDOWS',
      payload: windows,
    });

  const getViewportWidth = useCallback(
    () => viewportRef.current?.offsetWidth || 0,
    [viewportRef]
  );

  const getViewportHeight = useCallback(
    () => viewportRef.current?.offsetHeight || 0,
    [viewportRef]
  );

  // TODO: These will be split into services
  const methods = getMethods({
    config,
    createWindow,
    getViewportHeight,
    getViewportWidth,
    setActiveWindowId,
    setWindowOrder,
    setWindows,
    state,
  });

  return {
    viewportRef,
    ...state,
    ...methods,
  };
}

export default useWindowManager;
