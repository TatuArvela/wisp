import React from 'react';
import styled from 'styled-components';

import AlertText from '../controls/AlertText';
import Button from '../controls/Button';
import Window from './Window';

interface Props {
  buttonText?: string;
  children: React.ReactNode;
  id: string;

  onButtonClick?(): void;

  title: string;
}

const AlertButton = styled(Button)`
  ${(props) => props.theme.controls.AlertButton}
`;

const AlertWindow = ({
  id,
  title,
  buttonText = 'OK',
  onButtonClick,
  children,
}: Props) => (
  <Window
    id={id}
    initialState={{
      title,
      isMaximizable: false,
      isMinimizable: false,
      isResizable: false,
    }}
  >
    <AlertText>{children}</AlertText>
    <AlertButton onClick={onButtonClick} type="button">
      {buttonText}
    </AlertButton>
  </Window>
);

export default AlertWindow;
