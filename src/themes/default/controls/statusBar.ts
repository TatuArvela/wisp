import { css } from 'styled-components';

export const StatusBar = css`
  border-top: 1px solid grey;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  margin-top: auto;
  font-size: 14px;
  flex-shrink: 0;
  gap: 3px;
  height: 26px;
  padding: 2px 0 0;
  width: 100%;
`;

export const ResizeHandle = css`
  bottom: 0;
  content: ' ';
  cursor: se-resize;
  height: 14px;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  width: 14px;
  overflow: clip;

  &:before {
    content: '';
    background: white;
    display: block;
    border-left: 1px solid black;
    transform: rotate(45deg);
    position: absolute;
    left: 4px;
    top: 5px;
    width: 18px;
    height: 18px;
  }

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    bottom: 0px;
    right: 0px;
    border-left: 10px solid transparent;
    border-bottom: 10px solid grey;
    border-top: 10px solid transparent;
  }
`;
