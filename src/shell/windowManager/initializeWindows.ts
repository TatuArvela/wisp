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

  windowElementArray.forEach((windowElement, index) => {
    const window: WindowType = {
      ...windowElement.props,
      height: config.defaultWindowHeight,
      isMaximizable: true, // TODO
      isMaximized: false,
      isMinimizable: !config.disableTaskbar && true, // TODO
      isMinimized: false,
      positionX: config.newWindowXOffset * index,
      positionY: config.newWindowYOffset * index,
      width: config.defaultWindowWidth,
    };
    return windowMap.set(window.id, window);
  });

  return windowMap;
};

export default initializeWindows;
