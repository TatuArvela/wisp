import { WindowManager } from 'core/types';
import React from 'react';

export const WindowManagerContext = React.createContext<WindowManager>(
  undefined
);
WindowManagerContext.displayName = 'WindowManagerContext';

export const WindowManagerProvider = WindowManagerContext.Provider;
export const WindowManagerConsumer = WindowManagerContext.Consumer;

export function useWindowManagerContext(): WindowManager {
  return React.useContext<WindowManager>(WindowManagerContext);
}
