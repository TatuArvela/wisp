import React from 'react';
import styled from 'styled-components';

interface ToolbarProps {
  children?: React.ReactNode;
}

const ToolbarElement = styled.div`
  ${(props) => props.theme.controls.Toolbar}
`;

const Toolbar = ({ children }: ToolbarProps) => {
  return <ToolbarElement>{children}</ToolbarElement>;
};

export default Toolbar;
