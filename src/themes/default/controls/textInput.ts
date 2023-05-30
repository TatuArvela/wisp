import { css } from 'styled-components';

import { ControlWrapperProps } from '../../../controls/ControlWrapper';
import { Label } from './label';

export const TextInputWrapper = css<ControlWrapperProps>``;

export const TextInputLabel = Label;

export const TextInputElement = css<{ disabled?: boolean }>`
  border-radius: 1px;
  border: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  box-sizing: border-box;
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  font-size: 12px;
  height: 24px;
  outline: none;
  width: 100%;
`;
