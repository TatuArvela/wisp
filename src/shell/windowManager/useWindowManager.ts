import { useState } from 'react';

import { WindowType } from '../../window/types';
import { ShellChildren, WindowManager } from '../types';
import dragWindow from './dragWindow';
import { prepareWindows } from './utils';

const useWindowManager = (shellChildren: ShellChildren): WindowManager => {
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

  return {
    activateWindow,
    activeWindowId: windowOrder[windowOrder.length - 1],
    dragWindow: (event, windowId) => {
      activateWindow(windowId);
      dragWindow(event, windows.get(windowId), updateWindow);
    },
    setWindowOrder,
    setWindows,
    windowOrder,
    windows,
  };
};

export default useWindowManager;
