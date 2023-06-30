import styled from 'styled-components';

export const LabelThemeProperties = ['Label'] as const;

export interface LabelProps {
  disabled?: boolean;
}

export const Label = styled.div<LabelProps>`
  ${(props) => props.theme.controls.Label}
`;

export default Label;
