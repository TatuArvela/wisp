import { css } from 'styled-components';

import {
  defaultTheme,
  WindowElementProps,
  WindowThemeSection,
} from '../../../src';
import titleBar from './titleBar';

const WindowContent = css`
  ${defaultTheme.window.WindowContent}
  font-family: serif;
`;

const WindowElement = css<WindowElementProps>`
  ${defaultTheme.window.WindowElement}
  background: cyan;
  border-color: cyan;
  box-shadow: 0 0 0 1px white;
`;

const window: Partial<WindowThemeSection> = {
  ...titleBar,
  WindowContent,
  WindowElement,
};

export default window;
