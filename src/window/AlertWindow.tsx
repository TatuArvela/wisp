import React from 'react';
import styled from 'styled-components';

import AlertButton from '../controls/AlertButton';
import AlertContent from '../controls/AlertContent';
import AlertText from '../controls/AlertText';
import icons, { IconKey } from '../icons';
import { Icon } from '../icons/types';
import { getIconFileForSize } from '../icons/utils';
import Window, { WindowProps } from './Window';

type AlertIconType = null | IconKey | Icon;

const AlertIconElement = styled.img`
  ${(props) => props.theme.controls.AlertIcon}
`;

const AlertIcon = ({ icon }: { icon: AlertIconType }) => {
  if (!icon) {
    return null;
  }

  let resolvedIcon;
  if (typeof icon === 'string') {
    resolvedIcon = icons[icon] ?? null;
  } else {
    resolvedIcon = icon;
  }

  if (!resolvedIcon) {
    return null;
  }

  const iconFile = getIconFileForSize(resolvedIcon);
  return <AlertIconElement src={iconFile} alt="Alert icon" />;
};

export type AlertWindowProps = WindowProps & {
  alertIcon?: AlertIconType;
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
