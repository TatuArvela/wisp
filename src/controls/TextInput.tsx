import React from 'react';
import styled from 'styled-components';

export interface TextInputWrapperProps {
  inlineLabel: boolean;
}
const TextInputWrapper = styled.div<TextInputWrapperProps>`
  ${(props) => props.theme.controls.TextInputWrapper}
`;

const TextInputLabel = styled.label`
  ${(props) => props.theme.controls.TextInputLabel}
`;

const TextInputElement = styled.input`
  ${(props) => props.theme.controls.TextInputElement}
`;

interface TextInputProps {
  inlineLabel?: boolean;
  label?: string;
  onChange(value: string): void;
  value?: string;
}
const TextInput = ({
  inlineLabel = false,
  label,
  onChange,
  value,
}: TextInputProps) => (
  <TextInputWrapper inlineLabel={inlineLabel}>
    {label && <TextInputLabel>{label}</TextInputLabel>}
    <TextInputElement
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </TextInputWrapper>
);

export default TextInput;
