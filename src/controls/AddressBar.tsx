import React from 'react';
import styled from 'styled-components';

export const AddressBarThemeProperties = [
  'AddressBar',
  'AddressBarInput',
] as const;

interface AddressBarProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onChange(value: string): void;
  value?: string;
}

const AddressBarInput = styled.input`
  ${(props) => props.theme.controls.AddressBarInput}
`;

const AddressBarElement = styled.div`
  ${(props) => props.theme.controls.AddressBar}
`;

const AddressBar = ({
  children,
  value,
  disabled,
  onChange,
}: AddressBarProps) => {
  return (
    <AddressBarElement>
      {children}
      <AddressBarInput
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
      />
    </AddressBarElement>
  );
};

export default AddressBar;
