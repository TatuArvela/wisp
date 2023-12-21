import React from 'react';
import styled from 'styled-components';

export const VersionInfoThemeProperties = ['VersionInfo'] as const;

const VersionInformationElement = styled.p`
  ${(props) => props.theme.elements.VersionInfo}
`;

export const VersionInfo = () => {
  const version =
    process.env.PACKAGE_VERSION || process.env.STORYBOOK_PACKAGE_VERSION;

  if (!version) {
    return null;
  }
  return (
    <VersionInformationElement>
      Wisp Version {version}
    </VersionInformationElement>
  );
};

export default VersionInfo;
