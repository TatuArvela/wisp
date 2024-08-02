import React from 'react';
import styled from 'styled-components';

import { Icon } from '../icons';
import { getIconFileForSize } from '../icons/utils';
import { useThemeManager } from '../themeManager/hooks';

export const MenuBarThemeProperties = [
  'MenuBarElement',
  'MenuBarThrobberIconElement',
  'MenuBarThrobberContainer',
] as const;

export interface MenuBarProps {
  children?: React.ReactNode;
  isThrobberAnimated?: boolean;
  throbberIcon?: Icon;
}

const MenuBarElement = styled.div`
  ${(props) => props.theme.controls.MenuBarElement}
`;

export const MenuBar = ({
  children,
  isThrobberAnimated,
  throbberIcon,
}: MenuBarProps) => {
  return (
    <MenuBarElement>
      {children}
      <MenuBarThrobber isAnimated={isThrobberAnimated} icon={throbberIcon} />
    </MenuBarElement>
  );
};

export interface MenuBarThrobberIconElementProps {
  isAnimated: boolean;
  src: string;
}

const MenuBarThrobberIconElement = styled.img<MenuBarThrobberIconElementProps>`
  ${(props) => props.theme.controls.MenuBarThrobberIconElement}
`;

export interface MenuBarThrobberIconProps {
  icon: string | Icon;
  onClick(): void;
}

const MenuBarThrobberIcon = ({
  icon = 'wisp',
  isAnimated,
}: MenuBarThrobberProps) => {
  const { theme } = useThemeManager();

  const resolvedIcon = typeof icon === 'string' ? theme.icons[icon] : icon;
  if (!resolvedIcon) {
    return null;
  }

  const iconFile = getIconFileForSize(resolvedIcon);
  return (
    <MenuBarThrobberIconElement
      src={iconFile}
      alt="Window icon"
      isAnimated={isAnimated}
    />
  );
};

const MenuBarThrobberContainer = styled.div`
  ${(props) => props.theme.controls.MenuBarThrobberContainer}
`;

export interface MenuBarThrobberProps {
  isAnimated: boolean;
  icon?: Icon;
}

const MenuBarThrobber = ({
  icon = 'wisp',
  isAnimated,
}: MenuBarThrobberProps) => (
  <MenuBarThrobberContainer>
    <MenuBarThrobberIcon icon={icon} isAnimated={isAnimated} />
  </MenuBarThrobberContainer>
);

export default MenuBar;
