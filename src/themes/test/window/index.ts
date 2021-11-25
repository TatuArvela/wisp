import { css } from 'styled-components';

import { WindowElementProps } from '../../../window/components/WindowElement';
import defaultTheme from '../../default/theme';
import { WindowThemeSection } from '../../types';
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
