import React from 'react';
import styled from 'styled-components';

import ControlWrapper, { ControlWrapperProps } from './ControlWrapper';

export const TextInputThemeProperties = [
  'TextInputElement',
  'TextInputLabel',
  'TextInputWrapper',
] as const;

const TextInputWrapper = styled(ControlWrapper)`
  ${(props) => props.theme.controls.TextInputWrapper}
`;

export interface TextInputLabelProps {
  disabled?: boolean;
}

const TextInputLabel = styled.label<TextInputLabelProps>`
  ${(props) => props.theme.controls.TextInputLabel}
`;

export interface TextInputElementProps {
  disabled?: boolean;
}

const TextInputElement = styled.input<TextInputElementProps>`
  ${(props) => props.theme.controls.TextInputElement}
`;

export interface TextInputProps extends ControlWrapperProps {
  disabled?: boolean;
  label?: string;
  onChange(value: string): void;
  value?: string;
}

export const TextInput = ({
  disabled,
  inlineLabel,
  label,
  onChange,
  value,
}: TextInputProps) => (
  <TextInputWrapper inlineLabel={inlineLabel}>
    {label && <TextInputLabel disabled={disabled}>{label}</TextInputLabel>}
    <TextInputElement
      disabled={disabled}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </TextInputWrapper>
);

export default TextInput;
