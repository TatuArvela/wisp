import React from 'react';
import styled from 'styled-components';

import type { Icon } from '../icons';
import { getIconFileForSize } from '../icons/utils';
import { useThemeManager } from '../themeManager/hooks';

export const ToolbarButtonThemeProperties = [
  'ToolbarButtonElement',
  'ToolbarButtonWrapper',
  'ToolbarButtonLabel',
  'ToolbarButtonIconElement',
] as const;

export interface ToolbarButtonWrapperProps {
  disabled?: boolean;
}

const ToolbarButtonWrapper = styled.div<ToolbarButtonWrapperProps>`
  ${(props) => props.theme.controls.ToolbarButtonWrapper}
`;

const ToolbarButtonLabel = styled.div`
  ${(props) => props.theme.controls.ToolbarButtonLabel}
`;

const ToolbarButtonIconElement = styled.img`
  ${(props) => props.theme.controls.ToolbarButtonIconElement}
`;

export interface ToolbarButtonIconProps {
  icon: string | Icon;
}

const ToolbarButtonIcon = ({ icon }: ToolbarButtonIconProps) => {
  const { theme } = useThemeManager();

  const resolvedIcon = typeof icon === 'string' ? theme.icons[icon] : icon;
  if (!resolvedIcon) {
    return null;
  }

  const iconFile = getIconFileForSize(resolvedIcon);
  return <ToolbarButtonIconElement src={iconFile} alt="Window icon" />;
};

export type ToolbarButtonElementProps = Omit<
  ToolbarButtonProps,
  'icon' | 'label'
>;

const ToolbarButtonElement = styled.button`
  ${(props) => props.theme.controls.ToolbarButtonElement}
`;

export interface ToolbarButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  disabled?: boolean;
  onClick?(): void;
  icon?: Icon;
  label?: string;
}

export const ToolbarButton = ({
  disabled,
  icon,
  label,
  ...rest
}: ToolbarButtonProps) => {
  return (
    <ToolbarButtonWrapper disabled={disabled}>
      <ToolbarButtonElement disabled={disabled} {...rest}>
        {icon !== undefined && <ToolbarButtonIcon icon={icon} />}
        {label && <ToolbarButtonLabel>{label}</ToolbarButtonLabel>}
      </ToolbarButtonElement>
    </ToolbarButtonWrapper>
  );
};

export default ToolbarButton;
