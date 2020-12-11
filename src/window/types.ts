import React from 'react';

export type WindowProps = {
  children: React.ReactNode;
  id: string;
  title: string;
};

export type WindowType = WindowProps & {
  height: number;
  isMinimizable: boolean;
  positionX: number;
  positionY: number;
  width: number;
};
