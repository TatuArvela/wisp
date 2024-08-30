import React, { useCallback, useEffect, useLayoutEffect, useMemo } from 'react';
import useResizeObserver from 'use-resize-observer';

import { useConfig } from '../ConfigContext';
import reducer from './state/reducer';
import {
  ActionPayload,
  ActionType,
  WindowManagerAction,
  WindowManagerState,
} from './state/types';
import {
  WindowManager as WindowManagerType,
  WindowManagerActions,
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
    config: config,
    viewportHeight: null,
    viewportWidth: null,
    viewportMargins: config.viewportMargins,
    windowOrder: [],
    windows: new Map(),
  });

  const viewportRef = React.useRef<HTMLDivElement>(null);
  const { width: viewportWidth, height: viewportHeight } =
    useResizeObserver<HTMLDivElement>({
      ref: viewportRef,
    });

  const action = useCallback(
    <T extends ActionType>(type: T) =>
      (payload: ActionPayload[T]) => {
        dispatch({
          type,
          payload,
        } as Extract<WindowManagerAction, { type: T }>);
      },
    [dispatch]
  );

  const setConfig = useMemo(() => action('SET_CONFIG'), [action]);
  const updateViewportSize = useMemo(
    () => action('UPDATE_VIEWPORT_SIZE'),
    [action]
  );

  const actions: WindowManagerActions = useMemo(
    () => ({
      activateWindow: action('ACTIVATE_WINDOW'),
      closeWindow: action('CLOSE_WINDOW'),
      createWindow: action('CREATE_WINDOW'),
      deactivateWindow: action('DEACTIVATE_WINDOW'),
      maximizeWindow: action('MAXIMIZE_WINDOW'),
      minimizeWindow: action('MINIMIZE_WINDOW'),
      restoreWindow: action('RESTORE_WINDOW'),
      setViewportWindowMargins: action('UPDATE_VIEWPORT_MARGINS'),
      unmaximizeWindow: action('UNMAXIMIZE_WINDOW'),
      updateWindow: action('UPDATE_WINDOW'),
    }),
    [action]
  );

  const context: WindowManagerType = useMemo(
    () => ({
      ...state,
      ...actions,
    }),
    [actions, state]
  );

  useEffect(() => {
    setConfig(config);
  }, [config, setConfig]);

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
