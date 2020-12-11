import { Direction, WindowType } from '../../window/types';
import { Config } from '../types';

const calculatePositionX = (
  window: WindowType,
  xOffset: number,
  getViewportWidth: () => number
) =>
  Math.min(
    Math.max(window.positionX - xOffset, 0),
    getViewportWidth() - window.width
  );

const calculatePositionY = (
  window: WindowType,
  yOffset: number,
  getViewportHeight: () => number
) =>
  Math.min(
    Math.max(window.positionY - yOffset, 0),
    getViewportHeight() - window.height
  );

const calculateWidth = (
  config: Config,
  window: WindowType,
  xOffset: number,
  getViewportWidth: () => number,
  factor: number
) =>
  Math.min(
    Math.max(window.width - xOffset * factor, config.minWindowWidth),
    Math.min(getViewportWidth() - window.positionX, config.maxWindowWidth)
  );

const calculateHeight = (
  config: Config,
  window: WindowType,
  yOffset: number,
  getViewportHeight: () => number,
  factor: number
) =>
  Math.min(
    Math.max(window.height - yOffset * factor, config.minWindowHeight),
    Math.min(
      getViewportHeight() - window.positionY - config.taskbarHeight,
      config.maxWindowHeight
    )
  );

/* eslint-disable no-param-reassign */

export const repositionWindow = (
  window: WindowType,
  xOffset: number,
  yOffset: number,
  getViewportWidth: () => number,
  getViewportHeight: () => number
): void => {
  window.positionX = calculatePositionX(window, xOffset, getViewportWidth);
  window.positionY = calculatePositionY(window, yOffset, getViewportHeight);
};

export const resizeWindow = (
  config: Config,
  window: WindowType,
  direction: Direction,
  xOffset: number,
  yOffset: number,
  getViewportWidth: () => number,
  getViewportHeight: () => number
): void => {
  const resizeN = () => {
    const originalHeight = window.height;
    window.height = calculateHeight(
      config,
      window,
      yOffset,
      getViewportHeight,
      -1
    );
    if (window.height !== originalHeight) {
      window.positionY = calculatePositionY(
        window,
        window.height - originalHeight,
        getViewportHeight
      );
    }
  };
  const resizeE = () => {
    window.width = calculateWidth(config, window, xOffset, getViewportWidth, 1);
  };
  const resizeS = () => {
    window.height = calculateHeight(
      config,
      window,
      yOffset,
      getViewportHeight,
      1
    );
  };
  const resizeW = () => {
    const originalWidth = window.width;
    window.width = calculateWidth(
      config,
      window,
      xOffset,
      getViewportWidth,
      -1
    );
    if (window.width !== originalWidth) {
      window.positionX = calculatePositionX(
        window,
        window.width - originalWidth,
        getViewportWidth
      );
    }
  };

  switch (direction) {
    case Direction.N:
      resizeN();
      break;
    case Direction.NE:
      resizeN();
      resizeE();
      break;
    case Direction.E:
      resizeE();
      break;
    case Direction.SE:
      resizeS();
      resizeE();
      break;
    case Direction.S:
      resizeS();
      break;
    case Direction.SW:
      resizeS();
      resizeW();
      break;
    case Direction.W:
      resizeW();
      break;
    case Direction.NW:
      resizeN();
      resizeW();
      break;
    default:
      break;
  }
};
