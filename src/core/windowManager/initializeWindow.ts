import { WispConfig } from 'core/types';
import { WindowType } from 'window/types';

const initializeWindow = (
  config: WispConfig,
  props: Partial<WindowType>
): WindowType => {
  const index = 1; // TODO

  const isMinimizable = () => {
    if (!config.isTaskbarEnabled) return false;
    return props.isMinimizable ?? true;
  };

  const isMinimized = () => {
    if (!config.isTaskbarEnabled) return false;
    return props.isMinimized ?? false;
  };

  return {
    height: props.height ?? config.defaultWindowHeight,
    id: props.id,
    isClosable: props.isClosable ?? true,
    isClosed: props.isClosed ?? false,
    isDraggable: props.isDraggable ?? true,
    isMaximizable: props.isMaximizable ?? true,
    isMaximized: props.isMaximized ?? false,
    isMinimizable: isMinimizable(),
    isMinimized: isMinimized(),
    isResizable: props.isResizable ?? true,
    positionX: props.positionX ?? config.newWindowXOffset * index,
    positionY: props.positionY ?? config.newWindowYOffset * index,
    title: props.title,
    width: props.width ?? config.defaultWindowWidth,
  };
};

export default initializeWindow;
