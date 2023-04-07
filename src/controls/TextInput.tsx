import React from 'react';
import styled from 'styled-components';

const TextInputWrapper = styled.div`
  ${(props) => props.theme.controls.TextInputWrapper}
`;

const TextInputLabel = styled.label`
  ${(props) => props.theme.controls.TextInputLabel}
`;

const TextInputElement = styled.input`
  ${(props) => props.theme.controls.TextInputElement}
`;

interface TextInputProps {
  label?: string;
  onChange(value: string): void;
  value?: string;
}
const TextInput = ({ label, onChange, value }: TextInputProps) => (
  <TextInputWrapper>
    {label && <TextInputLabel>{label}</TextInputLabel>}
    <TextInputElement
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </TextInputWrapper>
);

export default TextInput;
