import { useState } from 'react';

import { ShellChildren, WindowManager } from '../types';
import { prepareWindows } from './utils';

const useWindowManager = (shellChildren: ShellChildren): WindowManager => {
  const preparedWindows = prepareWindows(shellChildren);

  const [windows, setWindows] = useState(preparedWindows);
  const [windowOrder, setWindowOrder] = useState<string[]>(
    Array.from(windows.keys()) || []
  );

  const activateWindow = (id: string) =>
    setWindowOrder([...windowOrder.filter((windowId) => windowId !== id), id]);

  return {
    activateWindow,
    activeWindowId: windowOrder[windowOrder.length - 1],
    setWindowOrder,
    setWindows,
    windowOrder,
    windows,
  };
};

export default useWindowManager;
