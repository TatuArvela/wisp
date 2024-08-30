import React, { ComponentProps } from 'react';
import styled from 'styled-components';

import Button from '../controls/Button';
import { useWindow } from '../window';
import { useWindowManager } from '../windowManager/hooks';

export const MessageBoxButtonThemeProperties = [
  'MessageBoxButtonElement',
] as const;

const MessageBoxButtonElement = styled(Button)`
  ${(props) => props.theme.controls.MessageBoxButtonElement}
`;

const MessageBoxButton = (
  props: ComponentProps<typeof MessageBoxButtonElement>
) => {
  const { id } = useWindow();
  const { closeWindow } = useWindowManager();
  const defaultOnClick = () => closeWindow(id);
  const onClick = props.onClick ?? defaultOnClick;
  return <MessageBoxButtonElement {...props} onClick={onClick} />;
};

export default MessageBoxButton;
