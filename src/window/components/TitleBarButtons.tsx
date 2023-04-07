import React from 'react';
import styled from 'styled-components';

interface TitleBarButtonsProps {
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

const WindowButton = styled.button``;
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
}: TitleBarButtonsProps): JSX.Element => (
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