import React from 'react';

export type WindowId = string;

export type WindowProps = {
  id: WindowId;
  title: string;
  children: React.ReactNode;
};

export type WindowType = WindowProps & {
  positionX: number;
  positionY: number;
};
