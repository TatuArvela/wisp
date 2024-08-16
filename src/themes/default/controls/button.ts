import { css } from 'styled-components';

import { ButtonElementProps, ButtonWrapperProps } from '../../../controls';

export const ButtonWrapper = css<ButtonWrapperProps>`
  display: inherit;
  padding: 0 1px 1px 0;
  margin-bottom: 1px;
`;

const activeStyle = css`
  &:active {
    box-shadow: none;
    position: relative;
    left: 1px;
    top: 1px;
  }
`;

export const ButtonElement = css<ButtonElementProps>`
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
