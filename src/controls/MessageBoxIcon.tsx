import React from 'react';
import styled from 'styled-components';

import { Icon } from '../icons';
import { getIconFileForSize } from '../icons/utils';
import { useThemeManager } from '../themeManager/hooks';

export const MessageBoxIconThemeProperties = ['MessageBoxIconElement'] as const;

const MessageBoxIconElement = styled.img`
  ${(props) => props.theme.controls.MessageBoxIconElement}
`;

const MessageBoxIcon = ({ icon }: { icon: string | Icon }) => {
  const { theme } = useThemeManager();

  const resolvedIcon = typeof icon === 'string' ? theme.icons[icon] : icon;
  if (!resolvedIcon) {
    return null;
  }

  const iconFile = getIconFileForSize(resolvedIcon);
  return <MessageBoxIconElement src={iconFile} />;
};

export default MessageBoxIcon;
