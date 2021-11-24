import { WispConfig } from '../../config';
import {
  BaseMethods,
  Direction,
  WindowDimensionMethods,
  WindowManagerState,
} from '../types';
import {
  getBoundaries,
  repositionWindow,
  resizeWindow,
} from './utils/dimensionUtils';
import mouseDragHandler from './utils/mouseDragHandler';

const getWindowDimensionMethods = (
  config: WispConfig,
  state: WindowManagerState,
  {
    activateWindow,
    getViewportHeight,
    getViewportWidth,
    updateWindow,
  }: BaseMethods
): WindowDimensionMethods => {
  const windowDragHandler = (event, id) => {
    activateWindow(id);
    const window = state.windows.get(id);
    if (!window.isDraggable || window.isMaximized) return;
    mouseDragHandler(event, window, (xOffset, yOffset) => {
      repositionWindow(
        window,
        xOffset,
        yOffset,
        getBoundaries(
          getViewportWidth(),
          getViewportHeight(),
          state.windowMargins
        )
      );
      updateWindow(id, window);
    });
  };

  const windowResizeHandler = (event, id, direction: Direction) => {
    activateWindow(id);
    const window = state.windows.get(id);
    if (!window.isResizable || window.isMaximized) return;
    mouseDragHandler(event, window, (xOffset, yOffset) => {
      resizeWindow(
        window,
        direction,
        xOffset,
        yOffset,
        getBoundaries(
          getViewportWidth(),
          getViewportHeight(),
          state.windowMargins
        )
      );
      updateWindow(id, window);
    });
  };

  return {
    dragWindow: windowDragHandler,
    resizeWindow: windowResizeHandler,
  };
};

export default getWindowDimensionMethods;
