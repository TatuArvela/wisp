import { WindowManagerBase } from '../types';

export const maximizeWindow =
  (windowManager: WindowManagerBase) => (id: string) => {
    windowManager.activateWindow(id);
    windowManager.updateWindow(id, { isMaximized: true });
  };

export const minimizeWindow =
  (windowManager: WindowManagerBase) => (id: string) => {
    windowManager.deactivateWindow(id);
    windowManager.updateWindow(id, { isMinimized: true });
  };

export const restoreWindow =
  (windowManager: WindowManagerBase) => (id: string) => {
    windowManager.activateWindow(id);
    windowManager.updateWindow(id, { isMinimized: false });
  };

export const unmaximizeWindow =
  (windowManager: WindowManagerBase) => (id: string) => {
    windowManager.activateWindow(id);
    windowManager.updateWindow(id, { isMaximized: false });
  };
