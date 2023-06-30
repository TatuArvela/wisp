import React from 'react';
import styled from 'styled-components';

export const MenuBarThemeProperties = ['MenuBar', 'MenuBarThrobber'] as const;

export interface MenuBarProps {
  children?: React.ReactNode;
  isThrobberAnimated?: boolean;
}

const MenuBarElement = styled.div`
  ${(props) => props.theme.controls.MenuBar}
`;

export const MenuBar = ({ children, isThrobberAnimated }: MenuBarProps) => {
  return (
    <MenuBarElement>
      {children}
      <MenuBarThrobber isAnimated={isThrobberAnimated} />
    </MenuBarElement>
  );
};

export interface MenuBarThrobberProps {
  isAnimated: boolean;
}

const MenuBarThrobber = styled.div<MenuBarThrobberProps>`
  ${(props) => props.theme.controls.MenuBarThrobber}
`;

export default MenuBar;
