import { Boundaries, WindowType } from '../../windowManager/types';
import {
  calculateHeight,
  calculatePositionX,
  calculatePositionY,
  calculateWidth,
} from './utils/dimensions';

const refitWindow = (
  window: WindowType,
  boundaries: Boundaries
): WindowType => {
  if (!window.height || !window.width) {
    return window;
  }

  const positionX = calculatePositionX(window, 0, boundaries);
  const positionY = calculatePositionY(window, 0, boundaries);

  const windowForComparison = {
    ...window,
    positionX,
    positionY,
  };

  const width = calculateWidth(windowForComparison, 0, boundaries);
  const height = calculateHeight(windowForComparison, 0, boundaries);

  return {
    ...window,
    positionX,
    positionY,
    height,
    width,
  };
};

export default refitWindow;
