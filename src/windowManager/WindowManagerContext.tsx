import React from 'react';

import { WindowManager } from './types';

export const WindowManagerContext =
  React.createContext<WindowManager>(undefined);
WindowManagerContext.displayName = 'WindowManagerContext';

export const WindowManagerProvider = WindowManagerContext.Provider;
