import styled from 'styled-components';

export const AlertIconThemeProperties = ['AlertIcon'] as const;

export const AlertIcon = styled.img`
  ${(props) => props.theme.controls.AlertIcon}
`;

export default AlertIcon;
