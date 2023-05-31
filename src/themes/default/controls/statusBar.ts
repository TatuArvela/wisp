import { css } from 'styled-components';

export const StatusBar = css`
  border-top: 1px solid grey;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  flex-shrink: 0;
  gap: 3px;
  height: 26px;
  padding: 2px 0;
  width: 100%;
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
    top: -10px;
    left: 0px;
    border-left: 10px solid transparent;
    border-bottom: 10px solid grey;
    border-top: 10px solid transparent;
  }
`;
