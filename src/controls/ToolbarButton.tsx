import React from 'react';
import styled from 'styled-components';

import { Icon } from '../icons/types';
import { getIconFileForSize } from '../icons/utils';

export const ToolbarButtonThemeProperties = [
  'ToolbarButton',
  'ToolbarButtonWrapper',
  'ToolbarButtonLabel',
  'ToolbarButtonIcon',
] as const;

interface ToolbarButtonWrapperProps {
  disabled?: boolean;
}

const ToolbarButtonWrapper = styled.div<ToolbarButtonWrapperProps>`
  ${(props) => props.theme.controls.ToolbarButtonWrapper}
`;

const ToolbarButtonLabel = styled.div`
  ${(props) => props.theme.controls.ToolbarButtonLabel}
`;

const ToolbarButtonIconElement = styled.img`
  ${(props) => props.theme.controls.ToolbarButtonIcon}
`;

const ToolbarButtonIcon = ({ icon }: { icon: Icon }) => {
  if (!icon) {
    return null;
  }

  const iconFile = getIconFileForSize(icon);
  return <ToolbarButtonIconElement src={iconFile} alt="Window icon" />;
};

export interface ToolbarButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  disabled?: boolean;
  onClick?(): void;
  icon?: Icon;
  label?: string;
}

const ToolbarButtonElement = styled.button`
  ${(props) => props.theme.controls.ToolbarButton}
`;

export const ToolbarButton = ({
  disabled,
  icon,
  label,
  ...rest
}: ToolbarButtonProps) => {
  return (
    <ToolbarButtonWrapper disabled={disabled}>
      <ToolbarButtonElement disabled={disabled} {...rest}>
        {icon && <ToolbarButtonIcon icon={icon} />}
        {label && <ToolbarButtonLabel>{label}</ToolbarButtonLabel>}
      </ToolbarButtonElement>
    </ToolbarButtonWrapper>
  );
};

export default ToolbarButton;
