import styled from 'styled-components';

import Button from '../controls/Button';

export const AlertButtonThemeProperties = ['AlertButton'] as const;

export const AlertButton = styled(Button)`
  ${(props) => props.theme.controls.AlertButton}
`;

export default AlertButton;
