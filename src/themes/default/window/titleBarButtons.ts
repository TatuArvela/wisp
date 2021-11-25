import { css } from 'styled-components';

const TitleBarButtons = css`
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
  height: 16px;
  margin: 2px 2px;
  padding: 0;
  position: relative;
  width: 16px;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    background: lightgray;
  }
`;

const MinimizeButton = css`
  ${sharedWindowButtonStyle};

  &:before {
    border-bottom: 1px solid black;
    content: '';
    height: 10px;
    left: 3px;
    pointer-events: none;
    position: absolute;
    top: 2px;
    width: 10px;
  }
`;

const MaximizeButton = css`
  ${sharedWindowButtonStyle};

  &:before {
    border: 1px solid black;
    content: '';
    height: 10px;
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 2px;
    width: 10px;
  }
`;

const UnmaximizeButton = css`
  ${sharedWindowButtonStyle};

  &:before {
    border-right: 1px solid black;
    border-top: 1px solid black;
    content: '';
    height: 8px;
    pointer-events: none;
    position: absolute;
    right: 2px;
    top: 2px;
    width: 8px;
  }

  &:after {
    border: 1px solid black;
    bottom: 2px;
    content: '';
    height: 8px;
    left: 2px;
    pointer-events: none;
    position: absolute;
    width: 8px;
  }
`;

const CloseButton = css`
  ${sharedWindowButtonStyle};

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 8px;
    transform: rotate(45deg);
    width: 16px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 16px;
  }
`;

export default {
  TitleBarButtons,
  MinimizeButton,
  MaximizeButton,
  UnmaximizeButton,
  CloseButton,
};
