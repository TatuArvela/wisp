import React, { ComponentProps } from 'react';
import styled from 'styled-components';

import Button from '../controls/Button';
import { useWindow } from '../window';
import { useWindowManager } from '../windowManager/hooks';

export const AlertButtonThemeProperties = ['AlertButtonElement'] as const;

const AlertButtonElement = styled(Button)`
  ${(props) => props.theme.controls.AlertButtonElement}
`;

const AlertButton = (props: ComponentProps<typeof AlertButtonElement>) => {
  const { id } = useWindow();
  const { closeWindow } = useWindowManager();
  const defaultOnClick = () => closeWindow(id);
  const onClick = props.onClick ?? defaultOnClick;
  return <AlertButtonElement {...props} onClick={onClick} />;
};

export default AlertButton;
