import React from 'react';
import styled from 'styled-components';

import ControlWrapper, { ControlWrapperProps } from './ControlWrapper';

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

const StyledCheckbox = styled.div<CheckboxProps>`
  ${(props) => props.theme.controls.Checkbox}
`;

const CheckboxLabel = styled.label`
  ${(props) => props.theme.controls.CheckboxLabel}
`;

interface CheckboxProps extends ControlWrapperProps {
  checked?: boolean;
  onClick?(): void;
  label?: string;
}

const Checkbox = ({ checked, onClick, label, inlineLabel }: CheckboxProps) => (
  <CheckboxWrapper inlineLabel={inlineLabel}>
    {label && <CheckboxLabel>{label}</CheckboxLabel>}
    <HiddenCheckbox checked={checked} />
    <StyledCheckbox checked={checked} onClick={onClick} />
  </CheckboxWrapper>
);

export default Checkbox;
