import React from 'react';

export type WindowId = string;

export type WindowType = {
  title: string;
  children: React.ReactNode;
};

export type WindowProps = {
  id: WindowId;
} & WindowType;
