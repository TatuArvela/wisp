import React from 'react';
import styled from 'styled-components';

export const StatusBarSectionThemeProperties = ['StatusBarSection'] as const;

export interface StatusBarSectionProps {
  width?: string;
  children?: React.ReactNode;
}

const StatusBarSectionElement = styled.div<StatusBarSectionProps>`
  ${(props) => props.theme.controls.StatusBarSection}
`;

export const StatusBarSection = ({
  width,
  children,
}: StatusBarSectionProps) => (
  <StatusBarSectionElement width={width} style={{ width: width }}>
    {children}
  </StatusBarSectionElement>
);

export default StatusBarSection;
