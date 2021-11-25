import { css } from 'styled-components';

import { TitleBarProps } from '../../../window/components/TitleBar';

const TitleBar = css<TitleBarProps>`
  background: ${(props) => (props.isActive ? 'rgb(19, 71, 214)' : 'grey')};
  border-radius: 3px;
  box-sizing: border-box;
  color: white;
  display: flex;
  font-size: 12px;
  height: 20px;
  flex-shrink: 0;
  line-height: 18px;
  padding-left: 4px;
  margin: 0 0 2px;
  user-select: none;
  width: 100%;
`;

const Title = css`
  display: block;
  flex-grow: 1;
`;

export default {
  TitleBar,
  Title,
};
