import React from 'react';
import styled from 'styled-components';

export const MenuBarThemeProperties = ['MenuBar', 'MenuBarThrobber'] as const;

export interface MenuBarProps {
  children?: React.ReactNode;
  isThrobberAnimated?: boolean;
  throbberImage?: string;
}

const MenuBarElement = styled.div`
  ${(props) => props.theme.controls.MenuBar}
`;

export const MenuBar = ({
  children,
  isThrobberAnimated,
  throbberImage,
}: MenuBarProps) => {
  return (
    <MenuBarElement>
      {children}
      <MenuBarThrobber isAnimated={isThrobberAnimated} image={throbberImage} />
    </MenuBarElement>
  );
};

export interface MenuBarThrobberProps {
  isAnimated: boolean;
  image?: string;
}

const MenuBarThrobber = styled.div<MenuBarThrobberProps>`
  ${(props) => props.theme.controls.MenuBarThrobber}
`;

export default MenuBar;
