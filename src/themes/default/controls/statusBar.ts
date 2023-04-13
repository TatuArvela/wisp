import { css } from 'styled-components';

export const StatusBar = css`
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

export const ResizeHandle = css`
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
