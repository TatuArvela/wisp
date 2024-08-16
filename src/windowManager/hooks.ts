import React, { useMemo } from 'react';

import { WindowManager, WindowType } from './types';
import { WindowManagerContext } from './WindowManagerContext';

export function useWindowManager(): WindowManager {
  return React.useContext<WindowManager>(WindowManagerContext);
}

export function useWindowById(id: string): WindowType | undefined {
  const windowManager = useWindowManager();
  return useMemo(
    () => windowManager.windows.get(id),
    [id, windowManager.windows]
  );
}

export function useWindowOrderNumberById(id: string): number | undefined {
  const windowManager = useWindowManager();
  return useMemo(
    () => windowManager.windowOrder.indexOf(id),
    [id, windowManager.windowOrder]
  );
}
