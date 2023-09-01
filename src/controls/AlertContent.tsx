import styled from 'styled-components';

export const AlertContentThemeProperties = ['AlertContent'] as const;

export const AlertContent = styled.div`
  ${(props) => props.theme.controls.AlertContent}
`;

export default AlertContent;
