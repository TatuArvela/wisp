import { css } from 'styled-components';

import { ButtonProps } from '../../../controls';

export const ButtonWrapper = css`
  display: inherit;
  padding: 0 1px 1px 0;
`;

const activeStyle = css`
  &:active {
    box-shadow: none;
    position: relative;
    left: 1px;
    top: 1px;
  }
`;

export const Button = css<ButtonProps>`
  background: white;
  border-radius: 2px;
  border: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  box-shadow: 1px 1px 0 0 gray;
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  font-size: 12px;
  height: 100%;
  padding: 6px;
  user-select: none;
  width: 100%;

  ${(props) => !props.disabled && activeStyle}
`;
