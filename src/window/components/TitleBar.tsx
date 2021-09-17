import React from 'react';
import styled from 'styled-components';

import TitleBarButtons from './TitleBarButtons';

type TitleBarProps = {
  close(): void;
  drag(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  isActive: boolean;
  isClosable: boolean;
  isMaximizable: boolean;
  isMaximized: boolean;
  isMinimizable: boolean;
  maximize(): void;
  minimize(): void;
  title: string;
  unmaximize(): void;
};

const TitleBarElement = styled.div<{ isActive: boolean }>`
  background: ${(props) => (props.isActive ? 'rgb(19, 71, 214)' : 'grey')};
  border-radius: 3px;
  box-sizing: border-box;
  color: white;
  display: flex;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  margin: 0;
  padding-left: 4px;
  margin-bottom: 2px;
  user-select: none;
  width: 100%;
`;

const Title = styled.div`
  display: block;
  flex-grow: 1;
`;

const TitleBar = ({
  close,
  drag,
  isActive,
  isMaximizable,
  isMaximized,
  isMinimizable,
  isClosable,
  maximize,
  minimize,
  title,
  unmaximize,
}: TitleBarProps): JSX.Element => (
  <TitleBarElement isActive={isActive}>
    <Title onMouseDown={drag}>{title}</Title>
    <TitleBarButtons
      close={close}
      isClosable={isClosable}
      isMaximizable={isMaximizable}
      isMaximized={isMaximized}
      isMinimizable={isMinimizable}
      maximize={maximize}
      minimize={minimize}
      unmaximize={unmaximize}
    />
  </TitleBarElement>
);

export default TitleBar;
