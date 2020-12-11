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

export type WindowProps = {
  children: React.ReactNode;
  id: string;
  title: string;
};

export type WindowType = WindowProps & {
  height: number;
  isMaximizable: boolean;
  isMaximized: boolean;
  isMinimizable: boolean;
  isMinimized: boolean;
  positionX: number;
  positionY: number;
  width: number;
};
