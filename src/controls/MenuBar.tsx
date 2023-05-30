import React from 'react';
import styled from 'styled-components';

export const MenuBarThemeProperties = ['MenuBar', 'MenuBarThrobber'];

interface MenuBarProps {
  children?: React.ReactNode;
  isThrobberAnimated?: boolean;
}

const MenuBarElement = styled.div`
  ${(props) => props.theme.controls.MenuBar}
`;

const MenuBar = ({ children, isThrobberAnimated }: MenuBarProps) => {
  return (
    <MenuBarElement>
      {children}
      <MenuBarThrobber isAnimated={isThrobberAnimated} />
    </MenuBarElement>
  );
};

const MenuBarThrobber = styled.div<{ isAnimated: boolean }>`
  ${(props) => props.theme.controls.MenuBarThrobber}
`;

export default MenuBar;
