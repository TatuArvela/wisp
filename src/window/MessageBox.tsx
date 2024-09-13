import React from 'react';

import MessageBoxButton from '../controls/MessageBoxButton';
import MessageBoxContent from '../controls/MessageBoxContent';
import MessageBoxIcon from '../controls/MessageBoxIcon';
import MessageBoxText from '../controls/MessageBoxText';
import { Icon } from '../icons';
import Window, { WindowProps } from './Window';

export type MessageBoxProps = WindowProps & {
  messageBoxIcon?: string | Icon;
  buttonText?: string;
  onButtonClick?(): void;
};

export const MessageBox = ({
  alwaysShowCloseButton = true,
  buttonText = 'OK',
  height = 'auto',
  isClosable = false,
  isMaximizable = false,
  isMinimizable = false,
  isModal = true,
  isResizable = false,
  messageBoxIcon = 'warning',
  onButtonClick,
  showAsTask = false,
  width = 'auto',
  ...windowProps
}: MessageBoxProps) => {
  return (
    <Window
      {...windowProps}
      alwaysShowCloseButton={alwaysShowCloseButton}
      height={height}
      id={windowProps.id}
      isClosable={isClosable}
      isMaximizable={isMaximizable}
      isMinimizable={isMinimizable}
      isModal={isModal ?? true}
      isResizable={isResizable}
      showAsTask={showAsTask}
      title={windowProps.title}
      width={width}
    >
      <MessageBoxInternal
        messageBoxIcon={messageBoxIcon}
        buttonText={buttonText}
        onButtonClick={onButtonClick}
      >
        {windowProps.children}
      </MessageBoxInternal>
    </Window>
  );
};

type MessageBoxInternalProps = {
  messageBoxIcon?: string | Icon;
  buttonText?: string;
  children?: React.ReactNode;
  onButtonClick?(): void;
};

const MessageBoxInternal = ({
  messageBoxIcon,
  buttonText,
  children,
  onButtonClick,
}: MessageBoxInternalProps) => {
  return (
    <>
      <MessageBoxContent>
        <MessageBoxIcon icon={messageBoxIcon} />
        <MessageBoxText>{children}</MessageBoxText>
      </MessageBoxContent>
      <MessageBoxButton onClick={onButtonClick} type="button">
        {buttonText}
      </MessageBoxButton>
    </>
  );
};

export default MessageBox;
