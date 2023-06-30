import React from 'react';

import AlertButton from '../controls/AlertButton';
import AlertText from '../controls/AlertText';
import Window, { WindowProps } from './Window';

export type AlertWindowProps = WindowProps & {
  buttonText?: string;
  onButtonClick?(): void;
};

export const AlertWindow = ({
  id,
  title,
  buttonText = 'OK',
  onButtonClick,
  children,
  ...windowProps
}: AlertWindowProps) => (
  <Window
    {...windowProps}
    id={id}
    title={title}
    isMaximizable={false}
    isMinimizable={false}
    isResizable={false}
  >
    <AlertText>{children}</AlertText>
    <AlertButton onClick={onButtonClick} type="button">
      {buttonText}
    </AlertButton>
  </Window>
);

export default AlertWindow;
