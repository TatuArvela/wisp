import React from 'react';

import AlertText from '../controls/AlertText';
import Button from '../controls/Button';
import Window from './Window';

type Props = {
  id: string;
  title: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const AlertWindow: React.FC<Props> = ({
  id,
  title,
  buttonText = 'OK',
  onButtonClick,
  children,
}) => (
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
