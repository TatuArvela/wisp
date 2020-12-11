import React from 'react';
import styled from 'styled-components';

import TitleBarButtons from './TitleBarButtons';

type TitleBarProps = {
  isActive: boolean;
  drag(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  title: string;
  maximize(): void;
  unmaximize(): void;
  isMaximized: boolean;
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

const Title = styled.div``;

const TitleBar = ({
  drag,
  isActive,
  isMaximized,
  maximize,
  unmaximize,
  title,
}: TitleBarProps): JSX.Element => (
  <TitleBarElement isActive={isActive} onMouseDown={drag}>
    <Title>{title}</Title>
    <TitleBarButtons
      close={() => null}
      isClosable
      isMaximizable
      isMaximized={isMaximized}
      isMinimizable
      maximize={maximize}
      minimize={() => null}
      unmaximize={unmaximize}
    />
  </TitleBarElement>
);

export default TitleBar;
