import React from 'react';

import { WindowManager } from './types';
import { WindowManagerContext } from './WindowManagerContext';

export function useWindowManager(): WindowManager {
  return React.useContext<WindowManager>(WindowManagerContext);
}
