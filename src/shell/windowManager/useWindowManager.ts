import { RefObject, useState } from 'react';

import { WindowType } from '../../window/types';
import { ShellChildren, WindowManager } from '../types';
import mouseDragHandler from './mouseDragHandler';
import { prepareWindows } from './utils';

const useWindowManager = (
  shellChildren: ShellChildren,
  shellElementRef: RefObject<HTMLDivElement>
): WindowManager => {
  const preparedWindows = prepareWindows(shellChildren);

  const [windows, setWindows] = useState(preparedWindows);
  const [windowOrder, setWindowOrder] = useState<string[]>(
    Array.from(windows.keys()) || []
  );

  const activateWindow = (id: string) =>
    setWindowOrder([...windowOrder.filter((windowId) => windowId !== id), id]);

  const updateWindow = (window: WindowType) => {
    const updatedWindows = new Map(windows);
    updatedWindows.set(window.id, window);
    setWindows(updatedWindows);
  };

  const getViewportWidth = () => shellElementRef.current?.offsetWidth || 0;
  const getViewportHeight = () => shellElementRef.current?.offsetHeight || 0;

  // TODO: Move to config
  const minWindowWidth = 200;
  const minWindowHeight = 100;
  const maxWindowWidth = Infinity;
  const maxWindowHeight = Infinity;

  return {
    activateWindow,
    activeWindowId: windowOrder[windowOrder.length - 1],
    dragWindow: (event, windowId) => {
      activateWindow(windowId);
      const window = windows.get(windowId);
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
    },
    resizeWindow: (event, windowId) => {
      activateWindow(windowId);
      const window = windows.get(windowId);
      mouseDragHandler(event, window, (xOffset, yOffset) => {
        // eslint-disable-next-line no-param-reassign
        window.width = Math.min(
          Math.max(window.width - xOffset, minWindowWidth),
          Math.min(getViewportWidth() - window.positionX, maxWindowWidth)
        );
        // eslint-disable-next-line no-param-reassign
        window.height = Math.min(
          Math.max(window.height - yOffset, minWindowHeight),
          Math.min(getViewportHeight() - window.positionY, maxWindowHeight)
        );
        updateWindow(window);
      });
    },
    setWindowOrder,
    setWindows,
    windowOrder,
    windows,
  };
};

export default useWindowManager;
