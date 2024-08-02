import React from 'react';
import styled from 'styled-components';

export const ToolbarThemeProperties = ['ToolbarElement'] as const;

export interface ToolbarProps {
  children?: React.ReactNode;
}

const ToolbarElement = styled.div`
  ${(props) => props.theme.controls.ToolbarElement}
`;

export const Toolbar = ({ children }: ToolbarProps) => {
  return <ToolbarElement>{children}</ToolbarElement>;
};

export default Toolbar;
