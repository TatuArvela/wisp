import React from 'react';
import styled from 'styled-components';

export const StatusBarSectionThemeProperties = ['StatusBarSection'] as const;

const StatusBarSectionElement = styled.div<{ hasSetWidth: boolean }>`
  ${(props) => props.theme.controls.StatusBarSection}
`;

export const StatusBarSection = ({
  width,
  children,
}: {
  width?: string;
  children?: React.ReactNode;
}) => (
  <StatusBarSectionElement
    hasSetWidth={width !== undefined}
    style={{ width: width }}
  >
    {children}
  </StatusBarSectionElement>
);

export default StatusBarSection;
