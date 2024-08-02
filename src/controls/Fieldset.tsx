import React from 'react';
import styled from 'styled-components';

export const FieldsetThemeProperties = [
  'FieldsetElement',
  'FieldsetLegend',
] as const;

const FieldsetElement = styled.fieldset`
  ${(props) => props.theme.controls.FieldsetElement}
`;

const FieldsetLegend = styled.legend`
  ${(props) => props.theme.controls.FieldsetLegend}
`;

export interface FieldsetProps {
  legend?: string;
  children?: React.ReactNode;
}

export const Fieldset = ({ legend, children }: FieldsetProps) => (
  <FieldsetElement>
    {legend && <FieldsetLegend>{legend}</FieldsetLegend>}
    {children}
  </FieldsetElement>
);

export default Fieldset;
