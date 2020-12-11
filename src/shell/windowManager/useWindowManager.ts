import { RefObject, useCallback, useLayoutEffect, useState } from 'react';

import { Direction, WindowType } from '../../window/types';
import { Config, WindowManager } from '../types';
import { fitWindow, repositionWindow, resizeWindow } from './dimensionUtils';
import mouseDragHandler from './mouseDragHandler';

const useWindowManager = (
  config: Config,
  _windows: Map<string, WindowType>,
  desktopRef: RefObject<HTMLDivElement>
): WindowManager => {
  const [windows, setWindows] = useState<Map<string, WindowType>>(_windows);
  const [windowOrder, setWindowOrder] = useState<string[]>(
    Array.from(windows.keys()) || []
  );
  const [activeWindowId, setActiveWindowId] = useState<string>(
    windowOrder[windowOrder.length - 1]
  );

  const getViewportWidth = useCallback(
    () => desktopRef.current?.offsetWidth || 0,
    [desktopRef]
  );
  const getViewportHeight = useCallback(
    () => desktopRef.current?.offsetHeight || 0,
    [desktopRef]
  );

  useLayoutEffect(() => {
    function updateAllWindowSizes() {
      const updatedWindows = new Map(windows);
      const desktopWidth = getViewportWidth();
      const desktopHeight = getViewportHeight();
      updatedWindows.forEach((window) => {
        fitWindow(window, config, desktopWidth, desktopHeight);
        repositionWindow(window, 0, 0, desktopWidth, desktopHeight);
      });
      setWindows(updatedWindows);
    }
    window.addEventListener('resize', updateAllWindowSizes);
    updateAllWindowSizes();
    return () => window.removeEventListener('resize', updateAllWindowSizes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateWindow = (window: WindowType) => {
    const updatedWindows = new Map(windows);
    updatedWindows.set(window.id, window);
    setWindows(updatedWindows);
  };

  const activateWindow = (id: string) => {
    setActiveWindowId(id);
    setWindowOrder([...windowOrder.filter((windowId) => windowId !== id), id]);
  };

  const closeWindow = (id: string) => {
    if (id === activeWindowId) setActiveWindowId(null);
    const updatedWindows = new Map(windows);
    updatedWindows.delete(id);
    setWindows(updatedWindows);
    setWindowOrder(windowOrder.filter((windowId) => windowId !== id));
  };

  const maximizeWindow = (id: string) => {
    activateWindow(id);
    const window = windows.get(id);
    window.isMaximized = true;
    updateWindow(window);
  };

  const unmaximizeWindow = (id: string) => {
    activateWindow(id);
    const window = windows.get(id);
    window.isMaximized = false;
    updateWindow(window);
  };

  const minimizeWindow = (id: string) => {
    if (id === activeWindowId) setActiveWindowId(null);
    const window = windows.get(id);
    window.isMinimized = true;
    updateWindow(window);
  };

  const restoreWindow = (id: string) => {
    activateWindow(id);
    const window = windows.get(id);
    window.isMinimized = false;
    updateWindow(window);
  };

  const windowDragHandler = (event, windowId) => {
    activateWindow(windowId);
    const window = windows.get(windowId);
    if (!window.isDraggable || window.isMaximized) return;
    mouseDragHandler(event, window, (xOffset, yOffset) => {
      repositionWindow(
        window,
        xOffset,
        yOffset,
        getViewportWidth(),
        getViewportHeight()
      );
      updateWindow(window);
    });
  };

  const windowResizeHandler = (event, windowId, direction: Direction) => {
    activateWindow(windowId);
    const window = windows.get(windowId);
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
      updateWindow(window);
    });
  };

  return {
    activateWindow,
    activeWindowId,
    closeWindow,
    dragWindow: windowDragHandler,
    maximizeWindow,
    minimizeWindow,
    resizeWindow: windowResizeHandler,
    restoreWindow,
    unmaximizeWindow,
    setWindowOrder,
    setWindows,
    windowOrder,
    windows,
  };
};

export default useWindowManager;
