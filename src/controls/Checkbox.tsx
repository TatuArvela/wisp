import React from 'react';
import styled from 'styled-components';

import ControlWrapper, { ControlWrapperProps } from './ControlWrapper';

export const CheckboxThemeProperties = [
  'Checkbox',
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

type StyledCheckboxProps = Omit<CheckboxProps, 'onChange'> & {
  onClick(): void;
};
const StyledCheckbox = styled.div<StyledCheckboxProps>`
  ${(props) => props.theme.controls.Checkbox}
`;

const CheckboxLabel = styled.label<{ disabled?: boolean }>`
  ${(props) => props.theme.controls.CheckboxLabel}
`;

interface CheckboxProps extends ControlWrapperProps {
  checked?: boolean;
  disabled?: boolean;
  onChange(value: boolean): void;
  label?: string;
}

const Checkbox = ({
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
      <StyledCheckbox checked={checked} disabled={disabled} onClick={onClick} />
    </CheckboxWrapper>
  );
};

export default Checkbox;
