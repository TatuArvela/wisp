import { css } from 'styled-components';

export const TitleBarButtons = css`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
`;

const sharedWindowButtonStyle = css`
  background: white;
  border-radius: 2px;
  border: none;
  box-sizing: border-box;
  height: 20px;
  margin: 2px 2px;
  padding: 0;
  position: relative;
  width: 20px;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    background: lightgray;
  }
`;

export const MinimizeButton = css`
  ${sharedWindowButtonStyle};

  &:before {
    border-bottom: 1px solid black;
    content: '';
    height: 10px;
    left: 5px;
    pointer-events: none;
    position: absolute;
    top: 4px;
    width: 10px;
  }
`;

export const MaximizeButton = css`
  ${sharedWindowButtonStyle};

  &:before {
    border: 1px solid black;
    content: '';
    height: 10px;
    left: 4px;
    pointer-events: none;
    position: absolute;
    top: 4px;
    width: 10px;
  }
`;

export const UnmaximizeButton = css`
  ${sharedWindowButtonStyle};

  &:before {
    border-right: 1px solid black;
    border-top: 1px solid black;
    content: '';
    height: 8px;
    pointer-events: none;
    position: absolute;
    right: 4px;
    top: 4px;
    width: 8px;
  }

  &:after {
    border: 1px solid black;
    bottom: 4px;
    content: '';
    height: 8px;
    left: 4px;
    pointer-events: none;
    position: absolute;
    width: 8px;
  }
`;

export const CloseButton = css`
  ${sharedWindowButtonStyle};

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(45deg);
    width: 16px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(-45deg);
    width: 16px;
  }
`;
