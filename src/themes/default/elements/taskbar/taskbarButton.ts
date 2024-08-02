import { css } from 'styled-components';

import { TaskbarButtonElementProps } from '../../../../elements';

const taskbarButtonActiveStyle = css`
  background: none;
  border-color: lightgray;
  box-shadow: inset 1px 1px 0 gray;
  font-weight: bold;
`;

export const TaskbarButtonElement = css<TaskbarButtonElementProps>`
  align-items: center;
  border-radius: 3px;
  border: 1px solid gray;
  box-shadow: 1px 1px 0 lightgray;
  display: inline-flex;
  flex-grow: 1;
  font-size: 12px;
  height: 22px;
  margin-left: 2px;
  text-align: left;
  user-select: none;
  width: 160px;
  ${(props) => props.active && taskbarButtonActiveStyle};
`;

export const TaskbarButtonTitle = css``;

export const TaskbarButtonIconElement = css`
  display: block;
  height: 16px;
  width: 16px;
  margin-right: 4px;
`;
