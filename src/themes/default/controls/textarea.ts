import { css } from 'styled-components';

import { ControlWrapperProps } from '../../../controls/ControlWrapper';
import { Label } from './label';

export const TextareaWrapper = css<ControlWrapperProps>``;

export const TextareaLabel = Label;

export const TextareaElement = css`
  border: 1px solid black;
  border-radius: 1ps;
  box-sizing: border-box;
  height: 24px;
  width: 100%;
  font-size: 12px;
  outline: none;
`;
