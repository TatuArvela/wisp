import styled from 'styled-components';

import Button from '../controls/Button';

const AlertButton = styled(Button)`
  ${(props) => props.theme.controls.AlertButton}
`;

export default AlertButton;
