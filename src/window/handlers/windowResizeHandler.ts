import {
  Boundaries,
  Direction,
  WindowManager,
  WindowType,
} from '../../windowManager/types';
import {
  calculateHeight,
  calculateWidth,
  getBoundaries,
} from './utils/dimensions';
import mouseDragHandler from './utils/mouseDragHandler';

export const windowResizeHandler =
  (windowManager: WindowManager, window: WindowType) =>
  (event, direction: Direction) => {
    windowManager.activateWindow(window.id);
    if (!window.isResizable || window.isMaximized || event.button !== 0) {
      return;
    }

    return mouseDragHandler(event, (xOffset, yOffset) => {
      // Using cloned mutable window for quick and iterative event handling
      window = {
        ...window,
        ...resizeWindow(
          window,
          direction,
          xOffset,
          yOffset,
          getBoundaries(windowManager)
        ),
      };
      windowManager.updateWindow(window);
    });
  };

const resizeWindow = (
  window: WindowType,
  direction: Direction,
  xOffset: number,
  yOffset: number,
  boundaries: Boundaries
): Partial<WindowType> => {
  const resizeN = (): Partial<WindowType> => {
    const newHeight = calculateHeight(window, -yOffset, boundaries, true);
    return {
      height: newHeight,
      positionY: window.positionY + (window.height - newHeight),
    };
  };

  const resizeE = (): Partial<WindowType> => {
    return {
      width: calculateWidth(window, xOffset, boundaries),
    };
  };

  const resizeS = (): Partial<WindowType> => {
    return {
      height: calculateHeight(window, yOffset, boundaries),
    };
  };

  const resizeW = (): Partial<WindowType> => {
    const newWidth = calculateWidth(window, -xOffset, boundaries, true);
    return {
      width: newWidth,
      positionX: window.positionX + (window.width - newWidth),
    };
  };

  switch (direction) {
    case Direction.N:
      return { ...resizeN() };
    case Direction.NE:
      return { ...resizeN(), ...resizeE() };
    case Direction.E:
      return { ...resizeE() };
    case Direction.SE:
      return { ...resizeS(), ...resizeE() };
    case Direction.S:
      return { ...resizeS() };
    case Direction.SW:
      return { ...resizeS(), ...resizeW() };
    case Direction.W:
      return { ...resizeW() };
    case Direction.NW:
      return { ...resizeN(), ...resizeW() };
    default:
      return {};
  }
};
