import React from 'react';

import AlertButton from '../controls/AlertButton';
import AlertText from '../controls/AlertText';
import Window from './Window';

interface Props {
  buttonText?: string;
  children: React.ReactNode;
  id: string;
  onButtonClick?(): void;
  title: string;
}

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
