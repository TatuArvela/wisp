import {
  Boundaries,
  WindowManager,
  WindowType,
} from '../../windowManager/types';
import {
  calculatePositionX,
  calculatePositionY,
  getBoundariesFromWindowManager,
} from './utils/dimensions';
import mouseDragHandler from './utils/mouseDragHandler';

export const windowDragHandler =
  (windowManager: WindowManager, window: WindowType) => (event) => {
    windowManager.activateWindow(window.id);
    if (!window.isDraggable || window.isMaximized || event.button !== 0) {
      return;
    }

    return mouseDragHandler(event, (xOffset, yOffset) => {
      // Using cloned mutable window for quick and iterative event handling
      window = {
        ...window,
        ...repositionWindow(
          window,
          xOffset,
          yOffset,
          getBoundariesFromWindowManager(windowManager)
        ),
      };
      windowManager.updateWindow(window.id, window);
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
