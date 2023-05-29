import { css } from 'styled-components';

import { TaskbarButtonProps } from '../../../../elements/Taskbar/TaskbarButton';

const taskbarButtonActiveStyle = css`
  background: none;
  border-color: lightgray;
  box-shadow: inset 1px 1px 0 gray;
  font-weight: bold;
`;

export const TaskbarButton = css<TaskbarButtonProps>`
  align-items: center;
  border-radius: 3px;
  border: 1px solid gray;
  box-shadow: 1px 1px 0 lightgray;
  display: flex;
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

export const TaskbarButtonIcon = css`
  display: block;
  height: 16px;
  width: 16px;
  margin-right: 4px;
`;
