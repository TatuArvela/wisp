import React from 'react';
import styled from 'styled-components';

import ControlWrapper, { ControlWrapperProps } from './ControlWrapper';

const TextInputWrapper = styled(ControlWrapper)`
  ${(props) => props.theme.controls.TextInputWrapper}
`;

const TextInputLabel = styled.label`
  ${(props) => props.theme.controls.TextInputLabel}
`;

const TextInputElement = styled.input`
  ${(props) => props.theme.controls.TextInputElement}
`;

interface TextInputProps extends ControlWrapperProps {
  label?: string;
  onChange(value: string): void;
  value?: string;
}
const TextInput = ({ inlineLabel, label, onChange, value }: TextInputProps) => (
  <TextInputWrapper inlineLabel={inlineLabel}>
    {label && <TextInputLabel>{label}</TextInputLabel>}
    <TextInputElement
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </TextInputWrapper>
);

export default TextInput;
