import {
  Boundaries,
  WindowManager,
  WindowType,
} from '../../../windowManager/types';

export const calculatePositionX = (
  window: WindowType,
  xOffset: number,
  boundaries: Boundaries
): number => {
  const newX = window.positionX - xOffset;
  const maxX = boundaries.maxX - window.width;
  return Math.min(Math.max(newX, boundaries.minX), maxX);
};

export const calculatePositionY = (
  window: WindowType,
  yOffset: number,
  boundaries: Boundaries
): number => {
  const newY = window.positionY - yOffset;
  const maxY = boundaries.maxY - window.height;
  return Math.min(Math.max(newY, boundaries.minY), maxY);
};

export const calculateWidth = (
  window: WindowType,
  xOffset: number,
  boundaries: Boundaries,
  scalingLeft?: boolean
): number => {
  const newWidth = window.width - xOffset;
  return Math.min(
    Math.max(newWidth, window.minWidth),
    boundaries.maxX - window.positionX,
    window.maxWidth,
    scalingLeft ? window.width + window.positionX - boundaries.minX : Math.min()
  );
};

export const calculateHeight = (
  window: WindowType,
  yOffset: number,
  boundaries: Boundaries,
  scalingUp?: boolean
): number => {
  const newHeight = window.height - yOffset;
  return Math.min(
    Math.max(newHeight, window.minHeight),
    boundaries.maxY - window.positionY,
    window.maxHeight,
    scalingUp ? window.height + window.positionY - boundaries.minY : Math.min()
  );
};

export const calculateBoundaries = ({
  getViewportWidth,
  getViewportHeight,
  viewportWindowMargins,
}: WindowManager): Boundaries => ({
  minX: viewportWindowMargins.left,
  minY: viewportWindowMargins.top,
  maxX: getViewportWidth() - viewportWindowMargins.right,
  maxY: getViewportHeight() - viewportWindowMargins.bottom,
});
