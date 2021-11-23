import { WispConfig } from '../../config';
import {
  BaseMethods,
  Direction,
  WindowDimensionMethods,
  WindowManagerState,
} from '../types';
import { repositionWindow, resizeWindow } from './utils/dimensionUtils';
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
        getViewportWidth(),
        getViewportHeight()
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
        config,
        window,
        direction,
        xOffset,
        yOffset,
        getViewportWidth(),
        getViewportHeight()
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
