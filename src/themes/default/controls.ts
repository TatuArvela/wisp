import { css } from 'styled-components';

import { ControlsThemeSection } from '../types';

const AlertText = css`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const Button = css`
  box-shadow: 1px 1px 0 0 gray;
  font-size: 11px;
  padding: 2px;
  user-select: none;
  border-radius: 0;
  border: 1px solid gray;

  &:active {
    box-shadow: none;
    position: relative;
    left: 1px;
    top: 1px;
  }
`;

const ResizeHandle = css`
  position: absolute;
  right: -3px;
  bottom: -3px;
  content: ' ';
  width: 12px;
  height: 12px;
  padding: 0;
  margin: 0;
  cursor: se-resize;

  &:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -9px;
    left: 1px;
    border-left: 10px solid transparent;
    border-bottom: 10px solid grey;
    border-top: 10px solid transparent;
  }
`;

const StatusBar = css``;

const controls: ControlsThemeSection = {
  AlertText,
  Button,
  ResizeHandle,
  StatusBar,
};

export default controls;
