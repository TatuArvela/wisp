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
  box-sizing: border-box;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
`;

const WindowButton = styled.button`
  background: white;
  border-radius: 2px;
  border: none;
  box-sizing: border-box;
  height: 16px;
  margin: 1px 2px;
  padding: 0;
  position: relative;
  width: 16px;
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
    border-bottom: 1px solid black;
    content: '';
    height: 10px;
    left: 3px;
    pointer-events: none;
    position: absolute;
    top: 2px;
    width: 10px;
  }
`;

const MaximizeButton = styled(WindowButton)`
  &:before {
    border: 1px solid black;
    content: '';
    height: 10px;
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 2px;
    width: 10px;
  }
`;

const UnmaximizeButton = styled(WindowButton)`
  &:before {
    border-right: 1px solid black;
    border-top: 1px solid black;
    content: '';
    height: 8px;
    pointer-events: none;
    position: absolute;
    right: 2px;
    top: 2px;
    width: 8px;
  }
  &:after {
    border: 1px solid black;
    bottom: 2px;
    content: '';
    height: 8px;
    left: 2px;
    pointer-events: none;
    position: absolute;
    width: 8px;
  }
`;

const CloseButton = styled(WindowButton)`
  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 8px;
    transform: rotate(45deg);
    width: 16px;
  }
  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 16px;
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
