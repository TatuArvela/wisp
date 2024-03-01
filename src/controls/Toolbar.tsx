import React from 'react';
import styled from 'styled-components';

export const ToolbarThemeProperties = ['Toolbar'] as const;

export interface ToolbarProps {
  children?: React.ReactNode;
}

const ToolbarElement = styled.div`
  ${(props) => props.theme.controls.Toolbar}
`;

export const Toolbar = ({ children }: ToolbarProps) => {
  return <ToolbarElement>{children}</ToolbarElement>;
};

export default Toolbar;
