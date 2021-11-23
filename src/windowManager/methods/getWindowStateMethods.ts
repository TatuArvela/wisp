import { WispConfig } from '../../config';
import { BaseMethods, WindowManagerState, WindowStateMethods } from '../types';

const getWindowStateMethods = (
  config: WispConfig,
  state: WindowManagerState,
  { activateWindow, deactivateWindow, updateWindow }: BaseMethods
): WindowStateMethods => {
  const maximizeWindow = (id: string) => {
    activateWindow(id);
    updateWindow(id, { isMaximized: true });
  };

  const unmaximizeWindow = (id: string) => {
    activateWindow(id);
    updateWindow(id, { isMaximized: false });
  };

  const minimizeWindow = (id: string) => {
    deactivateWindow(id);
    updateWindow(id, { isMinimized: true });
  };

  const restoreWindow = (id: string) => {
    activateWindow(id);
    updateWindow(id, { isMinimized: false });
  };

  return {
    maximizeWindow,
    unmaximizeWindow,
    minimizeWindow,
    restoreWindow,
  };
};

export default getWindowStateMethods;
