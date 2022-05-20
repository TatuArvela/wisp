import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const AlertTextElement = styled.div`
  ${(props) => props.theme.controls.AlertText}
`;

const AlertText = ({ children }: Props) => {
  return <AlertTextElement>{children}</AlertTextElement>;
};

export default AlertText;
