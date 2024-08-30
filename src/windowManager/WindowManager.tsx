import React, { useCallback, useLayoutEffect } from 'react';
import useResizeObserver from 'use-resize-observer';

import { useConfig } from '../ConfigContext';
import {
  maximizeWindow,
  minimizeWindow,
  restoreWindow,
  unmaximizeWindow,
} from './methods/windowStateMethods';
import reducer from './state/reducer';
import {
  InitialWindow,
  ViewportWindowMargins,
  WindowManager as WindowManagerType,
  WindowManagerAction,
  WindowManagerBase,
  WindowManagerState,
  WindowType,
} from './types';
import Viewport from './Viewport';
import { WindowManagerProvider } from './WindowManagerContext';

interface Props {
  children: React.ReactNode;
}

const WindowManager = ({ children }: Props) => {
  const config = useConfig();

  const [state, dispatch] = React.useReducer<
    React.Reducer<WindowManagerState, WindowManagerAction>
  >(reducer, {
    activeWindowId: null,
    viewportHeight: null,
    viewportWidth: null,
    viewportWindowMargins: config.viewportWindowMargins,
    windowOrder: [],
    windows: new Map(),
  });

  const viewportRef = React.useRef<HTMLDivElement>(null);
  const { width: viewportWidth, height: viewportHeight } =
    useResizeObserver<HTMLDivElement>({
      ref: viewportRef,
    });

  const activateWindow = useCallback(
    (id: string) =>
      dispatch({
        type: 'ACTIVATE_WINDOW',
        payload: id,
      }),
    [dispatch]
  );

  const closeWindow = useCallback(
    (id: string) =>
      dispatch({
        type: 'CLOSE_WINDOW',
        payload: id,
      }),
    [dispatch]
  );

  const createWindow = (props: InitialWindow) => {
    dispatch({
      type: 'CREATE_WINDOW',
      payload: { config, props },
    });
    return state.windows.get(props.id);
  };

  const deactivateWindow = useCallback(
    (id: string) =>
      dispatch({
        type: 'DEACTIVATE_WINDOW',
        payload: id,
      }),
    [dispatch]
  );

  const updateWindow = useCallback(
    (id: string, props: Partial<WindowType>) =>
      dispatch({
        type: 'UPDATE_WINDOW',
        payload: { id, props },
      }),
    [dispatch]
  );

  const setViewportWindowMargins = useCallback(
    (viewportWindowMargins: Partial<ViewportWindowMargins>) =>
      dispatch({
        type: 'SET_WINDOW_MARGINS',
        payload: viewportWindowMargins,
      }),
    [dispatch]
  );

  const updateViewportSize = useCallback(
    (dimensions: { height: number; width: number }) =>
      dispatch({
        type: 'UPDATE_VIEWPORT_SIZE',
        payload: dimensions,
      }),
    [dispatch]
  );

  // Used for setting up additional methods
  const baseContext: WindowManagerBase = {
    ...state,
    activateWindow,
    closeWindow,
    createWindow,
    deactivateWindow,
    setViewportWindowMargins,
    updateWindow,
    updateViewportSize,
    viewportRef,
  };

  const context: WindowManagerType = {
    ...baseContext,
    maximizeWindow: maximizeWindow(baseContext),
    minimizeWindow: minimizeWindow(baseContext),
    restoreWindow: restoreWindow(baseContext),
    unmaximizeWindow: unmaximizeWindow(baseContext),
  };

  useLayoutEffect(() => {
    updateViewportSize({
      height: viewportHeight,
      width: viewportWidth,
    });
  }, [updateViewportSize, viewportHeight, viewportWidth]);

  return (
    <WindowManagerProvider value={context}>
      <Viewport ref={viewportRef}>{children}</Viewport>
    </WindowManagerProvider>
  );
};

export default WindowManager;
