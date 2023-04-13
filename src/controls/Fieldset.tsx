import React from 'react';
import styled from 'styled-components';

export const FieldsetThemeProperties = ['Fieldset', 'FieldsetLegend'] as const;

const FieldsetElement = styled.fieldset`
  ${(props) => props.theme.controls.Fieldset}
`;

const FieldsetLegend = styled.legend`
  ${(props) => props.theme.controls.FieldsetLegend}
`;

export interface FieldsetProps {
  legend?: string;
  children?: React.ReactNode;
}

const Fieldset = ({ legend, children }: FieldsetProps) => (
  <FieldsetElement>
    {legend && <FieldsetLegend>{legend}</FieldsetLegend>}
    {children}
  </FieldsetElement>
);

export default Fieldset;
