import styled from 'styled-components';

export const LabelThemeProperties = ['Label'] as const;

const Label = styled.div<{ disabled?: boolean }>`
  ${(props) => props.theme.controls.Label}
`;

export default Label;
