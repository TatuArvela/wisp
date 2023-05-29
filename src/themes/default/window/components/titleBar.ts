import { css } from 'styled-components';

import { TitleBarProps } from '../../../../window/components/TitleBar';

export const TitleBar = css<TitleBarProps>`
  background: ${(props) => (props.isActive ? 'rgb(19, 71, 214)' : 'grey')};
  border-radius: 3px;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-shrink: 0;
  font-family: sans-serif;
  font-size: 12px;
  height: 24px;
  margin: 0 0 4px;
  padding-left: 4px;
  text-align: left;
  user-select: none;
  width: 100%;
`;

export const TitleBarTitleContainer = css`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const TitleBarTitle = css`
  position: relative;
  top: 1px;
`;

export const TitleBarIcon = css`
  display: block;
  height: 16px;
  width: 16px;
  margin-right: 4px;
`;
