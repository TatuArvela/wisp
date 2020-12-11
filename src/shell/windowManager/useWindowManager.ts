import { RefObject, useState } from 'react';

import { WindowType } from '../../window/types';
import { Config, WindowManager } from '../types';
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

  const putWindowToForeground = (id: string) =>
    setWindowOrder([...windowOrder.filter((windowId) => windowId !== id), id]);

  const activateWindow = (id: string) => {
    setActiveWindowId(id);
    putWindowToForeground(id);
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

  const dragWindow = (event, windowId) => {
    activateWindow(windowId);
    const window = windows.get(windowId);
    if (window.isMaximized) return;
    mouseDragHandler(event, window, (xOffset, yOffset) => {
      // eslint-disable-next-line no-param-reassign
      window.positionX = Math.min(
        Math.max(window.positionX - xOffset, 0),
        getViewportWidth() - window.width
      );
      // eslint-disable-next-line no-param-reassign
      window.positionY = Math.min(
        Math.max(window.positionY - yOffset, 0),
        getViewportHeight() - window.height
      );
      updateWindow(window);
    });
  };

  const resizeWindow = (event, windowId) => {
    activateWindow(windowId);
    const window = windows.get(windowId);
    if (window.isMaximized) return;
    mouseDragHandler(event, window, (xOffset, yOffset) => {
      // eslint-disable-next-line no-param-reassign
      window.width = Math.min(
        Math.max(window.width - xOffset, config.minWindowWidth),
        Math.min(getViewportWidth() - window.positionX, config.maxWindowWidth)
      );
      // eslint-disable-next-line no-param-reassign
      window.height = Math.min(
        Math.max(window.height - yOffset, config.minWindowHeight),
        Math.min(
          getViewportHeight() - window.positionY - config.taskbarHeight,
          config.maxWindowHeight
        )
      );
      updateWindow(window);
    });
  };

  return {
    activateWindow,
    activeWindowId,
    dragWindow,
    maximizeWindow,
    minimizeWindow,
    resizeWindow,
    restoreWindow,
    unmaximizeWindow,
    setWindowOrder,
    setWindows,
    windowOrder,
    windows,
  };
};

export default useWindowManager;
