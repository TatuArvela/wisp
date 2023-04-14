import { css } from 'styled-components';

export const ScrollLeftButton = css`
  height: 22px;
  width: 22px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid black;
  background: #fff;
  position: relative;
  box-sizing: border-box;

  &:hover {
    background: #dedede;
  }

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 5px;
    pointer-events: none;
    position: absolute;
    top: 13px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 5px;
    pointer-events: none;
    position: absolute;
    top: 7px;
    transform: rotate(-45deg);
    width: 8px;
  }
`;

export const ScrollRightButton = css`
  height: 22px;
  width: 22px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid black;
  background: #fff;
  position: relative;
  box-sizing: border-box;

  &:hover {
    background: #dedede;
  }

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 6px;
    pointer-events: none;
    position: absolute;
    top: 7px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 6px;
    pointer-events: none;
    position: absolute;
    top: 13px;
    transform: rotate(-45deg);
    width: 8px;
  }
`;

export const ScrollbarHorizontalTrack = css`
  width: 100%;
  position: relative;
  background: #ccc;
`;

export const ScrollbarHorizontalThumb = css`
  height: 22px;
  background: blue;
  position: absolute;
  border: 1px solid black;
  background: #fff;
  box-sizing: border-box;

  &:hover {
    background: #dedede;
  }
`;

export const ScrollbarHorizontalWrapper = css`
  background: #dedede;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 22px;
  left: 0;
  position: absolute;
`;
