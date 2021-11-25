import { css } from 'styled-components';

import { TitleBarProps } from '../../../window/components/TitleBar';
import defaultTheme from '../../default/theme';

const TitleBar = css<TitleBarProps>`
  ${defaultTheme.window.TitleBar}
  background: ${(props) => (props.isActive ? 'rgb(214,19,107)' : 'grey')};
  font-family: serif;
`;

export default {
  TitleBar,
};
