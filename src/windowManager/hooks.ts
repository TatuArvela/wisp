import React from 'react';

import { WindowManager, WindowType } from './types';
import { WindowManagerContext } from './WindowManagerContext';

export function useWindowManager(): WindowManager {
  return React.useContext<WindowManager>(WindowManagerContext);
}

export function useWindow(id: string): WindowType | undefined {
  const windowManager = useWindowManager();
  return windowManager.windows.get(id);
}
