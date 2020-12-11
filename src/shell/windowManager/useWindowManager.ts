import { RefObject, useState } from 'react';

import { Direction, WindowType } from '../../window/types';
import { Config, WindowManager } from '../types';
import { repositionWindow, resizeWindow } from './dimensionUtils';
import mouseDragHandler from './mouseDragHandler';

const useWindowManager = (
  config: Config,
  _windows: Map<string, WindowType>,
  shellElementRef: RefObject<HTMLDivElement>
): WindowManager => {
  const [windows, setWindows] = useState<Map<string, WindowType>>(_windows);
  const [windowOrder, setWindowOrder] = useState<string[]>(
    Array.from(windows.keys()) || []
  );
  const [activeWindowId, setActiveWindowId] = useState<string>(
    windowOrder[windowOrder.length - 1]
  );

  const getViewportWidth = () => shellElementRef.current?.offsetWidth || 0;
  const getViewportHeight = () => shellElementRef.current?.offsetHeight || 0;

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
        getViewportWidth,
        getViewportHeight
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
        getViewportWidth,
        getViewportHeight
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
