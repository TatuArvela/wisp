import React from 'react';
import styled from 'styled-components';

export const AddressBarThemeProperties = [
  'AddressBar',
  'AddressBarInput',
] as const;

export interface AddressBarProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onChange(value: string): void;
  value?: string;
}

export interface AddressBarInputProps {
  disabled?: boolean;
}

const AddressBarInput = styled.input<AddressBarInputProps>`
  ${(props) => props.theme.controls.AddressBarInput}
`;

const AddressBarElement = styled.div`
  ${(props) => props.theme.controls.AddressBar}
`;

export const AddressBar = ({
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
