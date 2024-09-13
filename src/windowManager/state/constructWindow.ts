import { WispConfig } from '../../config';
import { InitialWindow, WindowType } from '../types';
import { determinePosition } from './positionUtils';

const makeLength = (
  length: number | 'auto' | undefined,
  defaultLength: number | undefined
) => {
  if (length === 'auto') {
    return undefined;
  }
  return length ?? defaultLength;
};

const constructWindow = (
  config: WispConfig,
  windows: Map<string, WindowType>,
  initial: InitialWindow
): WindowType => {
  return {
    alwaysShowCloseButton: initial.alwaysShowCloseButton ?? false,
    height: makeLength(initial.height, config.defaultWindowHeight),
    icon: initial.icon,
    id: initial.id,
    isClosable: initial.isClosable ?? true,
    isClosed: initial.isClosed ?? false,
    isDraggable: initial.isDraggable ?? true,
    isMaximizable: initial.isMaximizable ?? true,
    isMaximized: initial.isMaximized ?? false,
    isMinimizable: config.enableWindowMinimize
      ? (initial.isMinimizable ?? true)
      : false,
    isMinimized: initial.isMinimized ?? false,
    isModal: initial.isModal ?? false,
    isResizable: initial.isResizable ?? true,
    maxHeight: initial.maxHeight ?? config.maxWindowHeight,
    maxWidth: initial.maxWidth ?? config.maxWindowWidth,
    minHeight: initial.minHeight ?? config.minWindowHeight,
    minWidth: initial.minWidth ?? config.minWindowWidth,
    parentId: initial.parentId ?? null,
    showAsTask: initial.showAsTask ?? true,
    title: initial.title ?? '',
    width: makeLength(initial.width, config.defaultWindowWidth),
    ...determinePosition(initial, config, windows),
  };
};

export default constructWindow;
