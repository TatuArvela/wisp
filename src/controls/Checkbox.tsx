import React from 'react';
import styled from 'styled-components';

interface Props {
  checked?: boolean;

  onClick?(): void;
}

const CheckboxWrapper = styled.div`
  ${(props) => props.theme.controls.CheckboxContainer}
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

const StyledCheckbox = styled.div<Props>`
  ${(props) => props.theme.controls.Checkbox}
`;

const Checkbox = ({ checked, onClick }: Props) => (
  <CheckboxWrapper>
    <HiddenCheckbox checked={checked} />
    <StyledCheckbox checked={checked} onClick={onClick} />
  </CheckboxWrapper>
);

export default Checkbox;
