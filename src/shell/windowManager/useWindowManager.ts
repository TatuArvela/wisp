import { useState } from 'react';

import { ShellChildren, WindowManager } from '../types';
import { mapWindows } from './utils';

const useWindowManager = (shellChildren: ShellChildren): WindowManager => {
  const mappedWindows = mapWindows(shellChildren);

  const [windows, setWindows] = useState(mappedWindows);
  const [windowOrder, setWindowOrder] = useState<string[]>(
    Array.from(windows.keys()) || []
  );

  const activateWindow = (id: string) =>
    setWindowOrder([...windowOrder.filter((windowId) => windowId !== id), id]);

  return { windows, setWindows, windowOrder, setWindowOrder, activateWindow };
};

export default useWindowManager;
