import React from 'react';
import styled from 'styled-components';

import ControlWrapper, { ControlWrapperProps } from './ControlWrapper';

export const TextareaThemeProperties = [
  'TextareaWrapper',
  'TextareaLabel',
  'TextareaElement',
] as const;

const TextareaWrapper = styled(ControlWrapper)`
  ${(props) => props.theme.controls.TextareaWrapper}
`;

const TextareaLabel = styled.label`
  ${(props) => props.theme.controls.TextareaLabel}
`;

const TextareaElement = styled.textarea`
  ${(props) => props.theme.controls.TextareaElement}
`;

interface TextareaProps extends ControlWrapperProps {
  label?: string;
  onChange(value: string): void;
  value?: string;
}
const Textarea = ({ inlineLabel, label, onChange, value }: TextareaProps) => (
  <TextareaWrapper inlineLabel={inlineLabel}>
    {label && <TextareaLabel>{label}</TextareaLabel>}
    <TextareaElement
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </TextareaWrapper>
);

export default Textarea;
