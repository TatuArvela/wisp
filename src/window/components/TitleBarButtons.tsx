import React from 'react';
import styled from 'styled-components';

type TitleBarButtonsProps = {
  close(): void;
  isClosable: boolean;
  isMaximizable: boolean;
  isMaximized: boolean;
  isMinimizable: boolean;
  maximize(): void;
  minimize(): void;
  unmaximize(): void;
};

const TitleBarButtonsElement = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
`;

const WindowButton = styled.button`
  margin: 1px 2px;
  border-radius: 2px;
  border: none;
  background: white;
  position: relative;
  width: 16px;
  height: 16px;
  padding: 0;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    background: lightgray;
  }
`;
WindowButton.defaultProps = {
  type: 'button',
};

const MinimizeButton = styled(WindowButton)`
  &:before {
    position: absolute;
    left: 3px;
    top: 2px;
    content: '';
    width: 10px;
    height: 10px;
    border-bottom: 1px solid black;
    pointer-events: none;
  }
`;

const MaximizeButton = styled(WindowButton)`
  &:before {
    position: absolute;
    left: 2px;
    top: 2px;
    content: '';
    width: 10px;
    height: 10px;
    border: 1px solid black;
    pointer-events: none;
  }
`;

const UnmaximizeButton = styled(WindowButton)`
  &:before {
    position: absolute;
    right: 2px;
    top: 2px;
    content: '';
    width: 8px;
    height: 8px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    pointer-events: none;
  }
  &:after {
    position: absolute;
    left: 2px;
    bottom: 2px;
    content: '';
    width: 8px;
    height: 8px;
    border: 1px solid black;
    pointer-events: none;
  }
`;

const CloseButton = styled(WindowButton)`
  &:before {
    position: absolute;
    left: 0;
    top: 8px;
    content: '';
    width: 16px;
    border-bottom: 1px solid black;
    transform: rotate(45deg);
    pointer-events: none;
  }
  &:after {
    position: absolute;
    left: 0;
    top: 8px;
    content: '';
    width: 16px;
    border-bottom: 1px solid black;
    transform: rotate(-45deg);
    pointer-events: none;
  }
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
