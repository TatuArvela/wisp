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
      positionX: config.newWindowXOffset * index,
      positionY: config.newWindowYOffset * index,
      width: config.defaultWindowWidth,
      height: config.defaultWindowHeight,
    };
    return windowMap.set(window.id, window);
  });

  return windowMap;
};

// eslint-disable-next-line import/prefer-default-export
export { initializeWindows };
