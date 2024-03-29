import { css } from 'styled-components';

import { ControlWrapperProps, TextInputElementProps } from '../../../controls';

export const TextInputWrapper = css<ControlWrapperProps>``;

export const TextInputLabel = css`
  ${(props) => props.theme.controls.Label}
`;

export const TextInputElement = css<TextInputElementProps>`
  border-radius: 1px;
  border: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  box-sizing: border-box;
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  font-size: 12px;
  height: 24px;
  outline: none;
  width: 100%;

  &:disabled {
    background: #dedede;
  }
`;
