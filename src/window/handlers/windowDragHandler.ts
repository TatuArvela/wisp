import {
  Boundaries,
  WindowManager,
  WindowType,
} from '../../windowManager/types';
import {
  calculateBoundaries,
  calculatePositionX,
  calculatePositionY,
} from './utils/dimensions';
import mouseDragHandler from './utils/mouseDragHandler';

export const windowDragHandler =
  (windowManager: WindowManager, window: WindowType) => (event: MouseEvent) => {
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
          calculateBoundaries(windowManager)
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
