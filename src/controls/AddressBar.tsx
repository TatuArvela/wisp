import React, { useRef } from 'react';
import styled from 'styled-components';

import type { Icon } from '../icons';
import { getIconFileForSize } from '../icons/utils';
import { useThemeManager } from '../themeManager/hooks';

export const AddressBarThemeProperties = [
  'AddressBarElement',
  'AddressBarInput',
  'AddressBarInputContainer',
  'AddressBarIcon',
  'AddressBarLabel',
] as const;

export interface AddressBarProps {
  disabled?: boolean;
  icon?: Icon;
  label?: string;
  onChange(value: string): void;
  value?: string;
}

export interface AddressBarElementProps {
  disabled?: boolean;
}

const AddressBarElement = styled.div<AddressBarElementProps>`
  ${(props) => props.theme.controls.AddressBarElement}
`;

export interface AddressBarLabelProps {
  disabled?: boolean;
}

const AddressBarLabel = styled.label<AddressBarLabelProps>`
  ${(props) => props.theme.controls.AddressBarLabel}
`;

export interface AddressBarInputContainerProps {
  disabled?: boolean;
}

const AddressBarInputContainer = styled.div`
  ${(props) => props.theme.controls.AddressBarInputContainer}
`;

export interface AddressBarInputProps {
  disabled?: boolean;
}

const AddressBarInput = styled.input<AddressBarInputProps>`
  ${(props) => props.theme.controls.AddressBarInput}
`;

const AddressBarIconElement = styled.img`
  ${(props) => props.theme.controls.AddressBarIcon}
`;

const AddressBarIcon = ({
  icon,
  onClick,
}: {
  icon: string | Icon;
  onClick(): void;
}) => {
  const { theme } = useThemeManager();

  const resolvedIcon = typeof icon === 'string' ? theme.icons[icon] : icon;
  if (!resolvedIcon) {
    return null;
  }

  const iconFile = getIconFileForSize(resolvedIcon);
  return <AddressBarIconElement src={iconFile} alt="Window icon" />;
};

export const AddressBar = ({
  disabled,
  icon,
  label,
  onChange,
  value,
}: AddressBarProps) => {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <AddressBarElement>
      {label && <AddressBarLabel disabled={disabled}>{label}</AddressBarLabel>}
      <AddressBarInputContainer>
        {icon && <AddressBarIcon icon={icon} onClick={handleIconClick} />}
        <AddressBarInput
          ref={inputRef}
          value={value}
          disabled={disabled}
          onChange={(event) => onChange(event.target.value)}
        />
      </AddressBarInputContainer>
    </AddressBarElement>
  );
};

export default AddressBar;
