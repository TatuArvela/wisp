import React from 'react';
import styled from 'styled-components';

import ControlWrapper, { ControlWrapperProps } from './ControlWrapper';

export const CheckboxThemeProperties = [
  'CheckboxElement',
  'CheckboxLabel',
  'CheckboxWrapper',
] as const;

const CheckboxWrapper = styled(ControlWrapper)`
  ${(props) => props.theme.controls.CheckboxWrapper}
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export interface CheckboxElementProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onClick(): void;
}

const CheckboxElement = styled.div<CheckboxElementProps>`
  ${(props) => props.theme.controls.CheckboxElement}
`;

export interface CheckboxLabelProps {
  disabled?: boolean;
}

const CheckboxLabel = styled.label<CheckboxLabelProps>`
  ${(props) => props.theme.controls.CheckboxLabel}
`;

export interface CheckboxProps extends ControlWrapperProps {
  checked?: boolean;
  disabled?: boolean;
  onChange(value: boolean): void;
  label?: string;
}

export const Checkbox = ({
  checked,
  disabled,
  onChange,
  label,
  inlineLabel,
}: CheckboxProps) => {
  const onClick = () => !disabled && onChange(!checked);
  return (
    <CheckboxWrapper inlineLabel={inlineLabel}>
      {label && <CheckboxLabel disabled={disabled}>{label}</CheckboxLabel>}
      <HiddenCheckbox checked={checked} onChange={() => undefined} />
      <CheckboxElement
        checked={checked}
        disabled={disabled}
        onClick={onClick}
      />
    </CheckboxWrapper>
  );
};

export default Checkbox;
