import { WispConfig } from '../../config';
import { InitialWindow, WindowType } from '../types';

// TODO: Handle case where Viewport runs out of space
export const determinePosition = (
  initial: InitialWindow,
  config: WispConfig,
  windows: Map<string, WindowType>
): Pick<
  WindowType,
  'isInInitialAutomaticPosition' | 'positionX' | 'positionY'
> => {
  const windowEntries = Array.from(windows.entries());

  const offsetMultiplier = windowEntries.reduce((acc, [_id, window]) => {
    if (
      window.isInInitialAutomaticPosition &&
      !window.isClosed &&
      !window.isMinimized
    ) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const shouldGetInitialAutomaticPosition =
    initial.positionX === undefined && initial.positionY === undefined;

  const getInitialAutomaticPositionX = () => {
    if (
      !shouldGetInitialAutomaticPosition ||
      initial.isMinimized ||
      initial.isClosed
    ) {
      return 0;
    }
    return config.newWindowXOffset * offsetMultiplier;
  };

  const getInitialAutomaticPositionY = () => {
    if (
      !shouldGetInitialAutomaticPosition ||
      initial.isMinimized ||
      initial.isClosed
    ) {
      return 0;
    }
    return config.newWindowYOffset * offsetMultiplier;
  };

  return {
    isInInitialAutomaticPosition: shouldGetInitialAutomaticPosition,
    positionX: initial.positionX ?? getInitialAutomaticPositionX(),
    positionY: initial.positionY ?? getInitialAutomaticPositionY(),
  };
};
