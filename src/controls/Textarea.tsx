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

export interface TextareaLabelProps {
  disabled?: boolean;
}

const TextareaLabel = styled.label<TextareaLabelProps>`
  ${(props) => props.theme.controls.TextareaLabel}
`;

export interface TextareaElementProps {
  disabled?: boolean;
}

const TextareaElement = styled.textarea<TextareaElementProps>`
  ${(props) => props.theme.controls.TextareaElement}
`;

export interface TextareaProps extends ControlWrapperProps {
  disabled?: boolean;
  label?: string;
  onChange(value: string): void;
  value?: string;
}

export const Textarea = ({
  disabled,
  inlineLabel,
  label,
  onChange,
  value,
}: TextareaProps) => (
  <TextareaWrapper inlineLabel={inlineLabel}>
    {label && <TextareaLabel disabled={disabled}>{label}</TextareaLabel>}
    <TextareaElement
      disabled={disabled}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </TextareaWrapper>
);

export default Textarea;
