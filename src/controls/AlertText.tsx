import React from 'react';
import styled from 'styled-components';

const AlertTextElement = styled.div`
  ${(props) => props.theme.controls.AlertText}
`;

const AlertText: React.FC = ({ children }) => {
  return <AlertTextElement>{children}</AlertTextElement>;
};

export default AlertText;
