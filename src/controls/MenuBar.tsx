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
  isThrobberActive?: boolean;
  throbberActiveIcon?: Icon;
  throbberIcon?: Icon;
}

export const MenuBar = ({
  children,
  isThrobberActive,
  throbberActiveIcon,
  throbberIcon,
}: MenuBarProps) => (
  <MenuBarElement>
    {children}
    <MenuBarThrobber
      isActive={isThrobberActive}
      icon={throbberIcon}
      activeIcon={throbberActiveIcon}
    />
  </MenuBarElement>
);

const MenuBarElement = styled.div`
  ${(props) => props.theme.controls.MenuBarElement}
`;

export interface MenuBarThrobberProps {
  activeIcon?: Icon;
  icon?: Icon;
  isActive: boolean;
}

const MenuBarThrobber = ({
  activeIcon,
  icon,
  isActive,
}: MenuBarThrobberProps) => (
  <MenuBarThrobberContainer>
    <MenuBarThrobberIcon
      icon={icon}
      activeIcon={activeIcon}
      isActive={isActive}
    />
  </MenuBarThrobberContainer>
);

export interface MenuBarThrobberIconProps {
  icon: string | Icon;
  onClick(): void;
}

const MenuBarThrobberIcon = ({
  activeIcon = 'menuBarThrobber',
  icon = 'menuBarThrobber',
  isActive,
}: MenuBarThrobberProps) => {
  const { theme } = useThemeManager();

  const iconToShow = isActive ? activeIcon : icon;

  const resolvedIcon =
    typeof iconToShow === 'string' ? theme.icons[iconToShow] : iconToShow;

  if (!resolvedIcon) {
    return null;
  }

  const iconFile = getIconFileForSize(resolvedIcon);

  return <MenuBarThrobberIconElement src={iconFile} isActive={isActive} />;
};

const MenuBarThrobberContainer = styled.div`
  ${(props) => props.theme.controls.MenuBarThrobberContainer}
`;

export interface MenuBarThrobberIconElementProps {
  isActive: boolean;
  src: string;
}

const MenuBarThrobberIconElement = styled.img<MenuBarThrobberIconElementProps>`
  ${(props) => props.theme.controls.MenuBarThrobberIconElement}
`;

export default MenuBar;
