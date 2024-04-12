import { css } from 'styled-components';

export const TitleBarButtons = css`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
`;

export const WindowButton = css`
  background: white;
  border-radius: 2px;
  border: none;
  box-sizing: border-box;
  height: 20px;
  margin: 2px 2px;
  padding: 0;
  position: relative;
  width: 20px;

  --window-button-icon-color: black;

  &:hover&:not(:disabled) {
    filter: brightness(90%);
  }

  &:active&:not(:disabled) {
    background: lightgray;
  }

  &:disabled {
    opacity: 50%;
    --window-button-icon-color: gray;
  }
`;

export const MinimizeButton = css`
  &:before {
    border-bottom: 1px solid var(--window-button-icon-color);
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
  &:before {
    border: 1px solid var(--window-button-icon-color);
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
  &:before {
    border-right: 1px solid var(--window-button-icon-color);
    border-top: 1px solid var(--window-button-icon-color);
    content: '';
    height: 8px;
    pointer-events: none;
    position: absolute;
    right: 4px;
    top: 4px;
    width: 8px;
  }

  &:after {
    border: 1px solid var(--window-button-icon-color);
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
  &:before {
    border-bottom: 1px solid var(--window-button-icon-color);
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(45deg);
    width: 16px;
  }

  &:after {
    border-bottom: 1px solid var(--window-button-icon-color);
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(-45deg);
    width: 16px;
  }
`;
