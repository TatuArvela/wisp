import React from 'react';
import styled from 'styled-components';

import { WindowIcon } from '../../windowManager/types';
import TitleBarButtons from './TitleBarButtons';

export interface TitleBarProps {
  isActive: boolean;
}

interface Props extends TitleBarProps {
  close(): void;

  drag(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;

  icon: WindowIcon;
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

const TitleContainer = styled.div`
  ${(props) => props.theme.window.TitleContainer}
`;

const Title = styled.div`
  ${(props) => props.theme.window.Title}
`;

const StyledIcon = styled.img`
  ${(props) => props.theme.window.Icon}
`;

const Icon = ({ icon }: { icon: WindowIcon }) => {
  if (!icon) {
    return null;
  }

  // TODO: get most suitable icon size from entries
  const iconFile = Object.entries(icon)[0][1];
  return <StyledIcon src={iconFile} alt="Window icon" />;
};

const TitleBar = ({
  close,
  drag,
  icon,
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
      <TitleContainer onMouseDown={drag} onDoubleClick={onTitleDoubleClick}>
        <Icon icon={icon} />
        <Title>{title}</Title>
      </TitleContainer>
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
