import { css } from 'styled-components';

export const ToolbarButtonWrapper = css``;

const hoverStyle = css`
  &:hover {
    border: 1px solid gray;
  }
`;

const activeStyle = css`
  &:active {
    background: lightgray;
    box-shadow: 1px 1px 0 lightgray inset;
    position: relative;
  }
`;

export const ToolbarButton = css<{ disabled?: boolean }>`
  justify-content: center;
  background: white;
  border-radius: 1px;
  border: 1px solid transparent;
  box-sizing: border-box;
  display: inline-flex;
  font-size: 12px;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  user-select: none;

  ${(props) => !props.disabled && hoverStyle}
  ${(props) => !props.disabled && activeStyle}
`;

export const ToolbarButtonLabel = css``;

export const ToolbarButtonIcon = css`
  display: block;
  height: 16px;
  width: 16px;
`;
