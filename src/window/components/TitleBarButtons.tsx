import React from 'react';
import styled from 'styled-components';

export const TitleBarButtonsThemeProperties = [
  'TitleBarButtons',
  'WindowButton',
  'MinimizeButton',
  'MaximizeButton',
  'UnmaximizeButton',
  'CloseButton',
] as const;

export interface TitleBarButtonsProps {
  close(): void;

  isClosable: boolean;
  isMaximizable: boolean;
  isMaximized: boolean;
  isMinimizable: boolean;

  maximize(): void;

  minimize(): void;

  unmaximize(): void;
}

const TitleBarButtonsElement = styled.div`
  ${(props) => props.theme.window.TitleBarButtons}
`;

const WindowButton = styled.button`
  ${(props) => props.theme.window.WindowButton}
`;
WindowButton.defaultProps = {
  type: 'button',
};

const MinimizeButton = styled(WindowButton)`
  ${(props) => props.theme.window.MinimizeButton}
`;

const MaximizeButton = styled(WindowButton)`
  ${(props) => props.theme.window.MaximizeButton}
`;

const UnmaximizeButton = styled(WindowButton)`
  ${(props) => props.theme.window.UnmaximizeButton}
`;

const CloseButton = styled(WindowButton)`
  ${(props) => props.theme.window.CloseButton}
`;

const TitleBarButtons = ({
  close,
  isClosable,
  isMaximizable,
  isMaximized,
  isMinimizable,
  maximize,
  minimize,
  unmaximize,
}: TitleBarButtonsProps) => (
  <TitleBarButtonsElement>
    {isMinimizable && <MinimizeButton onClick={minimize} />}
    {isMaximizable &&
      (isMaximized ? (
        <UnmaximizeButton onClick={unmaximize} />
      ) : (
        <MaximizeButton onClick={maximize} />
      ))}
    {isClosable && <CloseButton onClick={close} />}
  </TitleBarButtonsElement>
);
export default TitleBarButtons;
