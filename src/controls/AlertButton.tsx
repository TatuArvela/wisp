import React, { ComponentProps } from 'react';
import styled from 'styled-components';

import Button from '../controls/Button';
import { useWindow } from '../window';
import { useWindowManager } from '../windowManager/hooks';

export const AlertButtonThemeProperties = ['AlertButton'] as const;

const StyledAlertButton = styled(Button)`
  ${(props) => props.theme.controls.AlertButton}
`;

const AlertButton = (props: ComponentProps<typeof StyledAlertButton>) => {
  const { id } = useWindow();
  const { closeWindow } = useWindowManager();
  const defaultOnClick = () => closeWindow(id);
  const onClick = props.onClick ?? defaultOnClick;
  return <StyledAlertButton {...props} onClick={onClick} />;
};

export default AlertButton;
