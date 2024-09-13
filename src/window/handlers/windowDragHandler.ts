import React from 'react';

import {
  Boundaries,
  WindowManager,
  WindowType,
} from '../../windowManager/types';
import {
  calculatePositionX,
  calculatePositionY,
  getBoundaries,
} from './utils/dimensions';
import mouseDragHandler from './utils/mouseDragHandler';

export const windowDragHandler =
  (windowManager: WindowManager, window: WindowType) =>
  (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    windowManager.activateWindow(window.id);
    if (!window.isDraggable || window.isMaximized || event.button !== 0) {
      return;
    }

    return mouseDragHandler(event, (xOffset, yOffset) => {
      // Updating existing instance to have quick and iterative event handling
      Object.assign(window, {
        ...repositionWindow(
          window,
          xOffset,
          yOffset,
          getBoundaries(windowManager)
        ),
      });

      windowManager.updateWindow(window);
    });
  };

const repositionWindow = (
  window: WindowType,
  xOffset: number,
  yOffset: number,
  boundaries: Boundaries
): Partial<WindowType> => {
  return {
    positionX: calculatePositionX(window, xOffset, boundaries),
    positionY: calculatePositionY(window, yOffset, boundaries),
  };
};
