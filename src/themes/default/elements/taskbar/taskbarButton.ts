import { css } from 'styled-components';

import { TaskbarButtonProps } from '../../../../elements/Taskbar/TaskbarButton';

const taskbarButtonActiveStyle = css`
  background: none;
  border-color: lightgray;
  box-shadow: inset 1px 1px 0 gray;
  font-weight: bold;
`;

export const TaskbarButton = css<TaskbarButtonProps>`
  border-radius: 3px;
  border: 1px solid gray;
  box-shadow: 1px 1px 0 lightgray;
  height: 22px;
  margin-left: 2px;
  text-align: left;
  width: 160px;
  user-select: none;
  ${(props) => props.active && taskbarButtonActiveStyle};
`;