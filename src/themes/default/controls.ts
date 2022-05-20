import { css } from 'styled-components';

import { ControlsThemeSection } from '../types';

const AlertText = css`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const AlertButton = css`
  width: 60px;
  margin: auto;
`;

const ButtonWrapper = css<{ height: number; width: number }>`
  display: inherit;
  height: ${(props) => `${props.height}px`};
  padding: 0 1px 1px 0;
  width: ${(props) => `${props.width}px`};
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
  right: 0;
  bottom: 0;
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

const StatusBar = css`
  box-sizing: border-box;
  margin: -3px;
  height: 20px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid grey;
  width: calc(100% + 6px);
  font-size: 14px;
  padding: 2px 3px;
`;

const controls: ControlsThemeSection = {
  AlertText,
  AlertButton,
  Button,
  ButtonWrapper,
  ResizeHandle,
  StatusBar,
};

export default controls;
