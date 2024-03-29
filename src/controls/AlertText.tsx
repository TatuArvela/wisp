import styled from 'styled-components';

export const AlertTextThemeProperties = ['AlertText'] as const;

export const AlertText = styled.div`
  ${(props) => props.theme.controls.AlertText}
`;

export default AlertText;
