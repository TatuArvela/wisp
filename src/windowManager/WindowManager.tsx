import React, { useCallback } from 'react';

import { WispConfig } from '../config';
import getWindowDimensionMethods from './methods/getWindowDimensionMethods';
import getWindowStateMethods from './methods/getWindowStateMethods';
import constructWindow from './state/constructWindow';
import reducer from './state/reducer';
import {
  BaseMethods,
  WindowManagerAction,
  WindowManagerState,
  WindowMargins,
  WindowType,
} from './types';
import { WindowManagerProvider } from './WindowManagerContext';

type Props = {
  config: WispConfig;
  viewportRef: React.MutableRefObject<HTMLDivElement>;
};

const WindowManager: React.FC<Props> = ({ children, config, viewportRef }) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<WindowManagerState, WindowManagerAction>
  >(reducer, {
    activeWindowId: null,
    windowMargins: config.windowMargins,
    windowOrder: [],
    windows: new Map(),
  });

  const activateWindow = useCallback(
    (id: string) =>
      dispatch({
        type: 'ACTIVATE_WINDOW',
        payload: id,
      }),
    []
  );

  const closeWindow = useCallback(
    (id: string) =>
      dispatch({
        type: 'CLOSE_WINDOW',
        payload: id,
      }),
    []
  );

  const createWindow = (id: string, initialState: Partial<WindowType>) => {
    const window = constructWindow(config, id, initialState);
    dispatch({
      type: 'CREATE_WINDOW',
      payload: window,
    });
    return state.windows.get(id);
  };

  const deactivateWindow = useCallback(
    (id: string) =>
      dispatch({
        type: 'DEACTIVATE_WINDOW',
        payload: id,
      }),
    []
  );

  const updateWindow = useCallback(
    (id: string, props: Partial<WindowType>) =>
      dispatch({
        type: 'UPDATE_WINDOW',
        payload: { id, props },
      }),
    []
  );

  const setWindowMargins = useCallback(
    (windowMargins: Partial<WindowMargins>) =>
      dispatch({
        type: 'SET_WINDOW_MARGINS',
        payload: windowMargins,
      }),
    []
  );

  const getViewportHeight = useCallback(
    () => viewportRef.current?.offsetHeight || 0,
    [viewportRef]
  );

  const getViewportWidth = useCallback(
    () => viewportRef.current?.offsetWidth || 0,
    [viewportRef]
  );

  const baseMethods: BaseMethods = {
    activateWindow,
    closeWindow,
    createWindow,
    deactivateWindow,
    updateWindow,
    setWindowMargins,
    getViewportHeight,
    getViewportWidth,
  };

  const windowDimensionMethods = getWindowDimensionMethods(
    config,
    state,
    baseMethods
  );

  const windowStateMethods = getWindowStateMethods(config, state, baseMethods);

  const context = {
    viewportRef,
    ...state,
    ...baseMethods,
    ...windowDimensionMethods,
    ...windowStateMethods,
  };

  return (
    <WindowManagerProvider value={context}>{children}</WindowManagerProvider>
  );
};

export default WindowManager;
