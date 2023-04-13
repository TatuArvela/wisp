import styled from 'styled-components';

export const AlertTextThemeProperties = ['AlertText'] as const;

const AlertText = styled.div`
  ${(props) => props.theme.controls.AlertText}
`;

export default AlertText;
