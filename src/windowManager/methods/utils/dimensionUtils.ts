import { WispConfig } from '../../../config';
import { Boundaries, Direction, WindowMargins, WindowType } from '../../types';

// TODO: Split to smaller utilities

const calculatePositionX = (
  window: WindowType,
  xOffset: number,
  boundaries: Boundaries
) => {
  const newX = window.positionX - xOffset;
  const maxX = boundaries.maxX - window.width; // Keep window within viewport
  return Math.min(Math.max(newX, boundaries.minX), maxX);
};

const calculatePositionY = (
  window: WindowType,
  yOffset: number,
  boundaries: Boundaries
) => {
  const newY = window.positionY - yOffset;
  const maxY = boundaries.maxY - window.height; // Keep window within viewport
  return Math.min(Math.max(newY, boundaries.minY), maxY);
};

const calculateWidth = (
  window: WindowType,
  xOffset: number,
  boundaries: Boundaries,
  factor: number // TODO: Clarify
) => {
  const newWidth = window.width - xOffset * factor;
  const maxWidth = boundaries.minX + window.positionX; // Keep window within viewport
  return Math.min(
    Math.max(newWidth, window.minWidth),
    Math.min(maxWidth, window.maxWidth)
  );
};

const calculateHeight = (
  window: WindowType,
  yOffset: number,
  boundaries: Boundaries,
  factor: number // TODO: Clarify
) => {
  const newHeight = window.height - yOffset * factor;
  const maxHeight = boundaries.minY + window.positionY; // Keep window within viewport
  return Math.min(
    Math.max(newHeight, window.minHeight),
    Math.min(maxHeight, window.maxHeight)
  );
};

// TODO: Return new positions instead of mutating window
/* eslint-disable no-param-reassign */

export const repositionWindow = (
  window: WindowType,
  xOffset: number,
  yOffset: number,
  boundaries: Boundaries
): void => {
  window.positionX = calculatePositionX(window, xOffset, boundaries);
  window.positionY = calculatePositionY(window, yOffset, boundaries);
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
  window: WindowType,
  direction: Direction,
  xOffset: number,
  yOffset: number,
  boundaries: Boundaries
): void => {
  const resizeN = () => {
    const originalHeight = window.height;
    window.height = calculateHeight(window, yOffset, boundaries, -1);
    if (window.height !== originalHeight) {
      window.positionY = calculatePositionY(
        window,
        window.height - originalHeight,
        boundaries
      );
    }
  };

  const resizeE = () => {
    window.width = calculateWidth(window, xOffset, boundaries, 1);
  };

  const resizeS = () => {
    window.height = calculateHeight(window, yOffset, boundaries, 1);
  };

  const resizeW = () => {
    const originalWidth = window.width;
    window.width = calculateWidth(window, xOffset, boundaries, -1);
    if (window.width !== originalWidth) {
      window.positionX = calculatePositionX(
        window,
        window.width - originalWidth,
        boundaries
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

export const getBoundaries = (
  viewportWidth: number,
  viewportHeight: number,
  windowMargins: WindowMargins
): Boundaries => ({
  minX: windowMargins.left,
  minY: windowMargins.top,
  maxX: viewportWidth - windowMargins.right,
  maxY: viewportHeight - windowMargins.bottom,
});
