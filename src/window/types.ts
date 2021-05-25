export enum Direction {
  N = 'N',
  NE = 'NE',
  E = 'E',
  SE = 'SE',
  S = 'S',
  SW = 'SW',
  W = 'W',
  NW = 'NW',
}

export type WindowType = {
  height: number;
  id: string;
  isClosable: boolean;
  isClosed: boolean;
  isDraggable: boolean;
  isMaximizable: boolean;
  isMaximized: boolean;
  isMinimizable: boolean;
  isMinimized: boolean;
  isResizable: boolean;
  positionX: number;
  positionY: number;
  title: string;
  width: number;
};
