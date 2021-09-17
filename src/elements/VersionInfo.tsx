import React from 'react';
import styled from 'styled-components';

const VersionInformationElement = styled.p`
  bottom: 30px;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  margin: 4px;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: right;
  user-select: none;
  z-index: 1000;
`;

const VersionInfo = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
  const packageJson = require('../../package.json');

  return (
    <VersionInformationElement>
      Wisp Version {packageJson.version}
    </VersionInformationElement>
  );
};
export default VersionInfo;
