import React from 'react';
import styled from 'styled-components';

export const StatusBarSectionThemeProperties = [
  'StatusBarSectionElement',
] as const;

export interface StatusBarSectionProps {
  width?: string;
  children?: React.ReactNode;
}

export interface StatusBarSectionElementProps {
  width?: string;
}

const StatusBarSectionElement = styled.div<StatusBarSectionElementProps>`
  ${(props) => props.theme.controls.StatusBarSectionElement}
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
