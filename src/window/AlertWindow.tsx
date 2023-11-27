import React from 'react';
import styled from 'styled-components';

import AlertButton from '../controls/AlertButton';
import AlertContent from '../controls/AlertContent';
import AlertText from '../controls/AlertText';
import { Icon } from '../icons';
import { getIconFileForSize } from '../icons/utils';
import { useThemeManager } from '../themeManager/hooks';
import Window, { WindowProps } from './Window';

const AlertIconElement = styled.img`
  ${(props) => props.theme.controls.AlertIcon}
`;

const AlertIcon = ({ icon }: { icon: string | Icon }) => {
  const { theme } = useThemeManager();

  const resolvedIcon = typeof icon === 'string' ? theme.icons[icon] : icon;
  if (!resolvedIcon) {
    return null;
  }

  const iconFile = getIconFileForSize(resolvedIcon);
  return <AlertIconElement src={iconFile} alt="Alert icon" />;
};

export type AlertWindowProps = WindowProps & {
  alertIcon?: string | Icon;
  buttonText?: string;
  onButtonClick?(): void;
};

export const AlertWindow = ({
  alertIcon = 'warning',
  buttonText = 'OK',
  children,
  id,
  onButtonClick,
  title,
  ...windowProps
}: AlertWindowProps) => (
  <Window
    {...windowProps}
    id={id}
    title={title}
    isMaximizable={false}
    isMinimizable={false}
    isResizable={false}
  >
    <AlertContent>
      <AlertIcon icon={alertIcon} />
      <AlertText>{children}</AlertText>
    </AlertContent>
    <AlertButton onClick={onButtonClick} type="button">
      {buttonText}
    </AlertButton>
  </Window>
);

export default AlertWindow;
