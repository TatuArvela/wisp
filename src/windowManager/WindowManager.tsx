import React, { useCallback } from 'react';

import { WispConfig } from '../config';
import {
  maximizeWindow,
  minimizeWindow,
  restoreWindow,
  unmaximizeWindow,
} from './methods/windowStateMethods';
import constructWindow from './state/constructWindow';
import reducer from './state/reducer';
import {
  ViewportWindowMargins,
  WindowManager as WindowManagerType,
  WindowManagerAction,
  WindowManagerBase,
  WindowManagerState,
  WindowType,
} from './types';
import Viewport from './Viewport';
import { WindowManagerProvider } from './WindowManagerContext';

type Props = {
  config: WispConfig;
};

const WindowManager: React.FC<Props> = ({ children, config }) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<WindowManagerState, WindowManagerAction>
  >(reducer, {
    activeWindowId: null,
    viewportWindowMargins: config.viewportWindowMargins,
    windowOrder: [],
    windows: new Map(),
  });
  const viewportRef = React.useRef<HTMLDivElement>();

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

  const setViewportWindowMargins = useCallback(
    (viewportWindowMargins: Partial<ViewportWindowMargins>) =>
      dispatch({
        type: 'SET_WINDOW_MARGINS',
        payload: viewportWindowMargins,
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

  // Used for setting up additional methods
  const baseContext: WindowManagerBase = {
    ...state,
    activateWindow,
    closeWindow,
    createWindow,
    deactivateWindow,
    getViewportHeight,
    getViewportWidth,
    setViewportWindowMargins,
    updateWindow,
    viewportRef,
  };

  const context: WindowManagerType = {
    ...baseContext,
    maximizeWindow: maximizeWindow(baseContext),
    minimizeWindow: minimizeWindow(baseContext),
    restoreWindow: restoreWindow(baseContext),
    unmaximizeWindow: unmaximizeWindow(baseContext),
  };

  return (
    <WindowManagerProvider value={context}>
      <Viewport ref={viewportRef}>{children}</Viewport>
    </WindowManagerProvider>
  );
};

export default WindowManager;
