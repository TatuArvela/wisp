import { css } from 'styled-components';

import { ControlWrapperProps } from '../../../controls/ControlWrapper';
import { TextareaElementProps } from '../../../controls/Textarea';
import { Label } from './label';

export const TextareaWrapper = css<ControlWrapperProps>``;

export const TextareaLabel = Label;

export const TextareaElement = css<TextareaElementProps>`
  border-radius: 1px;
  border: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  box-sizing: border-box;
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  font-size: 12px;
  height: 24px;
  outline: none;
  width: 100%;
`;
