import React from 'react';
import styled from 'styled-components';

const VersionInformationElement = styled.p`
  ${(props) => props.theme.elements.VersionInfo}
`;

const VersionInfo: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
  const packageJson = require('../../package.json');

  return (
    <VersionInformationElement>
      Wisp Version {packageJson.version}
    </VersionInformationElement>
  );
};
export default VersionInfo;
