import React from 'react';

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

type WindowProperties = {
  isClosable: boolean;
  isDraggable: boolean;
  height: number;
  isMaximizable: boolean;
  isMaximized: boolean;
  isMinimizable: boolean;
  isMinimized: boolean;
  positionX: number;
  positionY: number;
  isResizable: boolean;
  width: number;
};

export type WindowProps = {
  children: React.ReactNode;
  id: string;
  title: string;
} & Partial<WindowProperties>;

export type WindowType = WindowProps & WindowProperties;
