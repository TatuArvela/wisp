import React from 'react';

import { WindowProps, WindowType } from '../../window/types';
import { Config, WindowManager } from '../types';

const initializeWindows = (
  config: Config,
  windowElements:
    | React.ReactElement<WindowProps>
    | React.ReactElement<WindowProps>[]
): WindowManager['windows'] => {
  const windowMap = new Map<string, WindowType>();

  const windowElementArray = Array.isArray(windowElements)
    ? windowElements
    : [windowElements];

  windowElementArray.forEach(({ props }, index) => {
    const window: WindowType = {
      children: props.children,
      isClosable: props.isClosable ?? true,
      isDraggable: props.isDraggable ?? true,
      height: props.height ?? config.defaultWindowHeight,
      id: props.id,
      isMaximizable: props.isMaximizable ?? true,
      isMaximized: props.isMaximized ?? false,
      isMinimizable: props.isMinimizable ?? !config.disableTaskbar,
      isMinimized: props.isMinimized ?? false,
      positionX: props.positionX ?? config.newWindowXOffset * index,
      positionY: props.positionY ?? config.newWindowYOffset * index,
      isResizable: props.isResizable ?? true,
      title: props.title,
      width: config.defaultWindowWidth,
    };
    return windowMap.set(window.id, window);
  });

  return windowMap;
};

export default initializeWindows;
