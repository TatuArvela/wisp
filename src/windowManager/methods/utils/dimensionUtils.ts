import { WispConfig } from '../../../config';
import { Direction, WindowType } from '../../types';

// TODO: Split to smaller utilities

const calculatePositionX = (
  window: WindowType,
  xOffset: number,
  desktopWidth: number
) =>
  Math.min(
    Math.max(window.positionX - xOffset, 0),
    desktopWidth - window.width
  );

const calculatePositionY = (
  window: WindowType,
  yOffset: number,
  desktopHeight: number
) =>
  Math.min(
    Math.max(window.positionY - yOffset, 0),
    desktopHeight - window.height
  );

const calculateWidth = (
  config: WispConfig,
  window: WindowType,
  xOffset: number,
  desktopWidth: number,
  factor: number
) =>
  Math.min(
    Math.max(window.width - xOffset * factor, config.minWindowWidth),
    Math.min(desktopWidth - window.positionX, config.maxWindowWidth)
  );

const calculateHeight = (
  config: WispConfig,
  window: WindowType,
  yOffset: number,
  desktopHeight: number,
  factor: number
) =>
  Math.min(
    Math.max(window.height - yOffset * factor, config.minWindowHeight),
    Math.min(desktopHeight - window.positionY, config.maxWindowHeight)
  );

// TODO: Return new positions instead of mutating window
/* eslint-disable no-param-reassign */

export const repositionWindow = (
  window: WindowType,
  xOffset: number,
  yOffset: number,
  desktopWidth: number,
  desktopHeight: number
): void => {
  window.positionX = calculatePositionX(window, xOffset, desktopWidth);
  window.positionY = calculatePositionY(window, yOffset, desktopHeight);
};

export const fitWindow = (
  window: WindowType,
  config: WispConfig,
  desktopWidth: number,
  desktopHeight: number
): void => {
  window.width = Math.min(
    Math.max(window.width, config.minWindowWidth),
    Math.min(desktopWidth, config.maxWindowWidth)
  );

  window.height = Math.min(
    Math.max(window.height, config.minWindowHeight),
    Math.min(desktopHeight, config.maxWindowHeight)
  );
};

export const resizeWindow = (
  config: WispConfig,
  window: WindowType,
  direction: Direction,
  xOffset: number,
  yOffset: number,
  desktopWidth: number,
  desktopHeight: number
): void => {
  const resizeN = () => {
    const originalHeight = window.height;
    window.height = calculateHeight(config, window, yOffset, desktopHeight, -1);
    if (window.height !== originalHeight) {
      window.positionY = calculatePositionY(
        window,
        window.height - originalHeight,
        desktopHeight
      );
    }
  };
  const resizeE = () => {
    window.width = calculateWidth(config, window, xOffset, desktopWidth, 1);
  };
  const resizeS = () => {
    window.height = calculateHeight(config, window, yOffset, desktopHeight, 1);
  };
  const resizeW = () => {
    const originalWidth = window.width;
    window.width = calculateWidth(config, window, xOffset, desktopWidth, -1);
    if (window.width !== originalWidth) {
      window.positionX = calculatePositionX(
        window,
        window.width - originalWidth,
        desktopWidth
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
