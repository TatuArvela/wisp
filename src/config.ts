import { WindowMargins } from './windowManager/types';

export type WispConfig = {
  defaultWindowHeight: number;
  defaultWindowWidth: number;
  maxWindowHeight: number;
  maxWindowWidth: number;
  minWindowHeight: number;
  minWindowWidth: number;
  newWindowXOffset: number;
  newWindowYOffset: number;
  taskbarHeight: number;
  windowMargins: WindowMargins;
};

export const defaultConfig: WispConfig = {
  defaultWindowHeight: 100,
  defaultWindowWidth: 200,
  maxWindowHeight: Infinity,
  maxWindowWidth: Infinity,
  minWindowHeight: 100,
  minWindowWidth: 200,
  newWindowXOffset: 10,
  newWindowYOffset: 10,
  taskbarHeight: 28,
  windowMargins: [0, 0, 0, 0],
};
