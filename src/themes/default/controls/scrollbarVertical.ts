import { css } from 'styled-components';

export const ScrollUpButton = css`
  height: 22px;
  width: 22px;
  border-radius: 2px;
  border: 1px solid black;
  flex-shrink: 0;
  background: #fff;
  position: relative;
  box-sizing: border-box;

  &:hover {
    background: #dedede;
  }

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 9px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 3px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(-45deg);
    width: 8px;
  }
`;

export const ScrollDownButton = css`
  height: 22px;
  width: 22px;
  border-radius: 2px;
  border: 1px solid black;
  flex-shrink: 0;
  background: #fff;
  position: relative;
  box-sizing: border-box;

  &:hover {
    background: #dedede;
  }

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 3px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 9px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(-45deg);
    width: 8px;
  }
`;

export const ScrollbarVerticalTrack = css`
  height: 100%;
  position: relative;
  background: #ccc;
`;

export const ScrollbarVerticalThumb = css`
  background: blue;
  width: 22px;
  position: absolute;
  border: 1px solid black;
  background: #fff;
  box-sizing: border-box;

  &:hover {
    background: #dedede;
  }
`;

export const ScrollbarVerticalWrapper = css`
  background: #dedede;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  width: 22px;
`;
