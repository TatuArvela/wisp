import React from 'react';
import styled from 'styled-components';

export const VersionInfoThemeProperties = ['VersionInfoElement'] as const;

const VersionInfoElement = styled.p`
  ${(props) => props.theme.elements.VersionInfoElement}
`;

export const VersionInfo = () => {
  const version =
    process.env.PACKAGE_VERSION || process.env.STORYBOOK_PACKAGE_VERSION;

  if (!version) {
    return null;
  }
  return <VersionInfoElement>Wisp Version {version}</VersionInfoElement>;
};

export default VersionInfo;
