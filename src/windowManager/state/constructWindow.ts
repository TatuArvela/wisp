import { WispConfig } from '../../config';
import { WindowType } from '../types';

const constructWindow = (
  config: WispConfig,
  id: string,
  initial: Partial<WindowType>
): WindowType => {
  const index = 1; // TODO

  return {
    id,
    height: initial.height ?? config.defaultWindowHeight,
    isClosable: initial.isClosable ?? true,
    isClosed: initial.isClosed ?? false,
    isDraggable: initial.isDraggable ?? true,
    isMaximizable: initial.isMaximizable ?? true,
    isMaximized: initial.isMaximized ?? false,
    isMinimizable: initial.isMinimizable ?? true,
    isMinimized: initial.isMinimized ?? false,
    isResizable: initial.isResizable ?? true,
    positionX: initial.positionX ?? config.newWindowXOffset * index,
    positionY: initial.positionY ?? config.newWindowYOffset * index,
    title: initial.title,
    width: initial.width ?? config.defaultWindowWidth,
  };
};

export default constructWindow;
