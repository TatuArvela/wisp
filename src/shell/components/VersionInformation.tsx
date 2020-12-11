import React from 'react';
import styled from 'styled-components';

const VersionInformationElement = styled.p`
  bottom: 30px;
  color: white;
  font-size: 14px;
  margin: 4px;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: right;
  user-select: none;
`;

const VersionInformation = (): JSX.Element => (
  <VersionInformationElement>
    react-classic-shell Version 0.1.0
  </VersionInformationElement>
);
export default VersionInformation;
