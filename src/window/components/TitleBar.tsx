import React from 'react';
import styled from 'styled-components';

import TitleBarButtons from './TitleBarButtons';

type TitleBarProps = {
  drag(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  isActive: boolean;
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
  color: white;
  height: 18px;
  font-size: 12px;
  line-height: 18px;
  padding-left: 4px;
  width: 100%;
  margin: 0;
  user-select: none;
  display: flex;
`;

const Title = styled.div`
  display: block;
  flex-grow: 1;
`;

const TitleBar = ({
  drag,
  isActive,
  isMaximized,
  isMinimizable,
  maximize,
  minimize,
  title,
  unmaximize,
}: TitleBarProps): JSX.Element => (
  <TitleBarElement isActive={isActive}>
    <Title onMouseDown={drag}>{title}</Title>
    <TitleBarButtons
      close={() => null}
      isClosable
      isMaximizable
      isMaximized={isMaximized}
      isMinimizable={isMinimizable}
      maximize={maximize}
      minimize={minimize}
      unmaximize={unmaximize}
    />
  </TitleBarElement>
);

export default TitleBar;
