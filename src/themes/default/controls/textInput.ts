import { css } from 'styled-components';

import { ControlWrapperProps } from '../../../controls/ControlWrapper';
import { Label } from './label';

export const TextInputWrapper = css<ControlWrapperProps>``;

export const TextInputLabel = Label;

export const TextInputElement = css`
  border: 1px solid black;
  border-radius: 1ps;
  box-sizing: border-box;
  height: 24px;
  width: 100%;
  font-size: 12px;
  outline: none;
`;
