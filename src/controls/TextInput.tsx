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

const TextInputLabel = styled.label<{ disabled?: boolean }>`
  ${(props) => props.theme.controls.TextInputLabel}
`;

const TextInputElement = styled.input<{ disabled?: boolean }>`
  ${(props) => props.theme.controls.TextInputElement}
`;

interface TextInputProps extends ControlWrapperProps {
  disabled?: boolean;
  label?: string;
  onChange(value: string): void;
  value?: string;
}

const TextInput = ({
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
