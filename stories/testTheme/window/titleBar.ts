import { css } from 'styled-components';

import { defaultTheme, TitleBarProps } from '../../../src';

const TitleBar = css<TitleBarProps>`
  ${defaultTheme.window.TitleBar}
  background: ${(props) => (props.isActive ? 'rgb(214,19,107)' : 'grey')};
  font-family: serif;
`;

export default {
  TitleBar,
};
