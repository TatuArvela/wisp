import defaultTheme from './themes/default/theme';
import testTheme from './themes/test/theme';
import { Theme } from './themes/types';
import { WindowMargins } from './windowManager/types';

export type WispConfig = {
  enableDefaultElements: boolean;
  defaultWindowHeight: number;
  defaultWindowWidth: number;
  maxWindowHeight: number;
  maxWindowWidth: number;
  minWindowHeight: number;
  minWindowWidth: number;
  newWindowXOffset: number;
  newWindowYOffset: number;
  taskbarHeight: number;
  themes: Theme[];
  windowMargins: WindowMargins;
};

export const defaultConfig: WispConfig = {
  enableDefaultElements: true,
  defaultWindowHeight: 100,
  defaultWindowWidth: 200,
  maxWindowHeight: Infinity,
  maxWindowWidth: Infinity,
  minWindowHeight: 100,
  minWindowWidth: 200,
  newWindowXOffset: 10,
  newWindowYOffset: 10,
  taskbarHeight: 28,
  themes: [defaultTheme, testTheme],
  windowMargins: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
};
