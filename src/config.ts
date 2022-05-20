import defaultTheme from './themes/default/theme';
import { Theme } from './themes/types';
import { ViewportWindowMargins } from './windowManager/types';

export interface WispConfig {
  enableDefaultElements: boolean;
  defaultWindowHeight: number;
  defaultWindowWidth: number;
  maxWindowHeight: number;
  maxWindowWidth: number;
  minWindowHeight: number;
  minWindowWidth: number;
  newWindowXOffset: number;
  newWindowYOffset: number;
  themes: Theme[];
  viewportWindowMargins: ViewportWindowMargins;
}

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
  themes: [defaultTheme],
  viewportWindowMargins: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
};
