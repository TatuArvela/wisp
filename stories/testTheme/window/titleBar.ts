import { css } from 'styled-components';

import { defaultTheme, TitleBarElementProps } from '../../../src';

const TitleBarElement = css<TitleBarElementProps>`
  ${defaultTheme.window.TitleBarElement}
  background: ${(props) => (props.isActive ? 'rgb(214,19,107)' : 'grey')};
  font-family: serif;
`;

export default {
  TitleBarElement,
};
