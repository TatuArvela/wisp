import { css } from 'styled-components';

import {
  defaultTheme,
  WindowElementProps,
  WindowThemeSection,
} from '../../../src';
import titleBar from './titleBar';

const WindowElementContent = css`
  ${defaultTheme.window.WindowElementContent}
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
  WindowElementContent,
  WindowElement,
};

export default window;
