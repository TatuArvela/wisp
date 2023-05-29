import { WispConfig } from '../../config';
import { WindowType } from '../types';

const constructWindow = (
  config: WispConfig,
  id: string,
  initial?: Partial<WindowType>
): WindowType => {
  return {
    height: initial?.height ?? config.defaultWindowHeight,
    icon: initial?.icon,
    id,
    isClosable: initial?.isClosable ?? true,
    isClosed: initial?.isClosed ?? false,
    isDraggable: initial?.isDraggable ?? true,
    isMaximizable: initial?.isMaximizable ?? true,
    isMaximized: initial?.isMaximized ?? false,
    isMinimizable: config.enableWindowMinimize
      ? initial?.isMinimizable ?? true
      : false,
    isMinimized: initial?.isMinimized ?? false,
    isResizable: initial?.isResizable ?? true,
    maxHeight: initial?.maxHeight ?? config.maxWindowHeight,
    maxWidth: initial?.maxWidth ?? config.maxWindowWidth,
    minHeight: initial?.minHeight ?? config.minWindowHeight,
    minWidth: initial?.minWidth ?? config.minWindowWidth,
    positionX: initial?.positionX ?? config.newWindowXOffset,
    positionY: initial?.positionY ?? config.newWindowYOffset,
    title: initial?.title ?? '',
    width: initial?.width ?? config.defaultWindowWidth,
  };
};

export default constructWindow;
