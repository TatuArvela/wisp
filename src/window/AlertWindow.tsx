import React from 'react';

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
    <Button
      onClick={onButtonClick}
      type="button"
      style={{ width: '60px', margin: 'auto' }}
    >
      {buttonText}
    </Button>
  </Window>
);

export default AlertWindow;
