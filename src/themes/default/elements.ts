import { css } from 'styled-components';

import { TaskbarButtonProps } from '../../elements/Taskbar/TaskbarButton';
import { ElementsThemeSection } from '../types';

const Taskbar = css`
  background: white;
  border-top: 1px solid black;
  box-sizing: border-box;
  bottom: 0;
  display: inline-block;
  height: 28px;
  overflow-x: visible;
  padding: 2px;
  position: absolute;
  width: 100%;
  white-space: nowrap;
`;

const taskbarButtonActiveStyle = css`
  background: none;
  border-color: lightgray;
  box-shadow: inset 1px 1px 0 gray;
  font-weight: bold;
`;
const TaskbarButton = css<TaskbarButtonProps>`
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

const Desktop = css`
  background: rgb(10, 36, 106);
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
`;

const VersionInfo = css`
  bottom: 30px;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  margin: 4px;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: right;
  user-select: none;
  z-index: 1000;
`;

const elements: ElementsThemeSection = {
  Taskbar,
  TaskbarButton,
  Desktop,
  VersionInfo,
};

export default elements;
