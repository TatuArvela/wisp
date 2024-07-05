import { WispConfig } from '../../config';
import { InitialWindow, WindowType } from '../types';

const constructWindow = (
  config: WispConfig,
  windows: Map<string, WindowType>,
  initial: InitialWindow
): WindowType => {
  return {
    alwaysShowCloseButton: initial.alwaysShowCloseButton ?? false,
    height: initial.height ?? config.defaultWindowHeight,
    icon: initial.icon,
    id: initial.id,
    isClosable: initial.isClosable ?? true,
    isClosed: initial.isClosed ?? false,
    isDraggable: initial.isDraggable ?? true,
    isMaximizable: initial.isMaximizable ?? true,
    isMaximized: initial.isMaximized ?? false,
    isMinimizable: config.enableWindowMinimize
      ? initial.isMinimizable ?? true
      : false,
    isMinimized: initial.isMinimized ?? false,
    isResizable: initial.isResizable ?? true,
    maxHeight: initial.maxHeight ?? config.maxWindowHeight,
    maxWidth: initial.maxWidth ?? config.maxWindowWidth,
    minHeight: initial.minHeight ?? config.minWindowHeight,
    minWidth: initial.minWidth ?? config.minWindowWidth,
    showAsTask: initial.showAsTask ?? true,
    title: initial.title ?? '',
    width: initial.width ?? config.defaultWindowWidth,
    ...determinePosition(config, windows, initial),
  };
};

// TODO: Handle case where Viewport runs out of space
const determinePosition = (
  config: WispConfig,
  windows: Map<string, WindowType>,
  initial: InitialWindow
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

export default constructWindow;
