import { css } from 'styled-components';

import { TitleBarProps } from '../../../window/components/TitleBar';

const TitleBar = css<TitleBarProps>`
  background: ${(props) => (props.isActive ? 'rgb(19, 71, 214)' : 'grey')};
  border-radius: 3px;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-shrink: 0;
  font-family: sans-serif;
  font-size: 12px;
  height: 20px;
  line-height: 18px;
  margin: 0 0 2px;
  padding-left: 4px;
  text-align: left;
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
