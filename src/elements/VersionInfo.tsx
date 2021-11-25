import React from 'react';
import styled from 'styled-components';

const VersionInformationElement = styled.p`
  ${(props) => props.theme.elements.VersionInfo}
`;

const VersionInfo: React.FC = () => {
  const version = '0.1.0';
  return (
    <VersionInformationElement>
      Wisp Version {version}
    </VersionInformationElement>
  );
};
export default VersionInfo;
