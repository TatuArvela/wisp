import { css } from 'styled-components';

export const ButtonWrapper = css<{ height: number; width: number }>`
  display: inherit;
  height: ${(props) => `${props.height}px`};
  padding: 0 1px 1px 0;
  width: ${(props) => `${props.width}px`};
`;

export const Button = css`
  background: white;
  border-radius: 2px;
  border: 1px solid black;
  box-shadow: 1px 1px 0 0 gray;
  font-size: 12px;
  padding: 6px;
  user-select: none;

  &:active {
    box-shadow: none;
    position: relative;
    left: 1px;
    top: 1px;
  }
`;
