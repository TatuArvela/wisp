import defaultTheme from './themes/default/theme';
import { Theme } from './themes/types';
import { ViewportMargins } from './windowManager/types';

export interface WispConfig {
  enableDefaultElements: boolean;
  enableVersionInfo: boolean;
  enableWindowMinimize: boolean;
  defaultWindowHeight: number;
  defaultWindowWidth: number;
  maxWindowHeight: number;
  maxWindowWidth: number;
  minWindowHeight: number;
  minWindowWidth: number;
  newWindowXOffset: number;
  newWindowYOffset: number;
  themes: Theme[];
  viewportMargins: ViewportMargins;
}

export const defaultConfig: WispConfig = {
  enableDefaultElements: true,
  enableVersionInfo: true,
  enableWindowMinimize: true,
  defaultWindowHeight: 120,
  defaultWindowWidth: 240,
  maxWindowHeight: Infinity,
  maxWindowWidth: Infinity,
  minWindowHeight: 50,
  minWindowWidth: 100,
  newWindowXOffset: 10,
  newWindowYOffset: 10,
  themes: [defaultTheme],
  viewportMargins: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
};
