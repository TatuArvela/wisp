import {
  Boundaries,
  ViewportWindowMargins,
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
  return Math.min(
    Math.max(newX, boundaries.minX),
    Math.max(maxX, boundaries.minX)
  );
};

export const calculatePositionY = (
  window: WindowType,
  yOffset: number,
  boundaries: Boundaries
): number => {
  const newY = window.positionY - yOffset;
  const maxY = boundaries.maxY - window.height;
  return Math.min(
    Math.max(newY, boundaries.minY),
    Math.max(maxY, boundaries.minY)
  );
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
    window.maxWidth,
    scalingLeft
      ? window.width + window.positionX - boundaries.minX
      : boundaries.maxX - window.positionX
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
    window.maxHeight,
    scalingUp
      ? window.height + window.positionY - boundaries.minY
      : boundaries.maxY - window.positionY
  );
};

export const getBoundariesFromWindowManager = ({
  getViewportWidth,
  getViewportHeight,
  viewportWindowMargins,
}: WindowManager): Boundaries =>
  getBoundaries({
    height: getViewportHeight(),
    width: getViewportWidth(),
    viewportWindowMargins,
  });

export const getBoundaries = ({
  height,
  width,
  viewportWindowMargins,
}: {
  height: number;
  width: number;
  viewportWindowMargins: ViewportWindowMargins;
}): Boundaries => ({
  minX: viewportWindowMargins.left,
  minY: viewportWindowMargins.top,
  maxX: width - viewportWindowMargins.right,
  maxY: height - viewportWindowMargins.bottom,
});
