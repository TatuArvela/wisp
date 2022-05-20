import React from 'react';
import styled from 'styled-components';

import TitleBarButtons from './TitleBarButtons';

export interface TitleBarProps {
  isActive: boolean;
}

interface Props extends TitleBarProps {
  close(): void;

  drag(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;

  isClosable: boolean;
  isMaximizable: boolean;
  isMaximized: boolean;
  isMinimizable: boolean;

  maximize(): void;

  minimize(): void;

  title: string;

  unmaximize(): void;
}

const TitleBarElement = styled.div<TitleBarProps>`
  ${(props) => props.theme.window.TitleBar}
`;

const Title = styled.div`
  ${(props) => props.theme.window.Title}
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
}: Props) => {
  const onTitleDoubleClick = () => {
    isMaximized ? unmaximize() : maximize();
  };

  return (
    <TitleBarElement isActive={isActive}>
      <Title onMouseDown={drag} onDoubleClick={onTitleDoubleClick}>
        {title}
      </Title>
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
};

export default TitleBar;
