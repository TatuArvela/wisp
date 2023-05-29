import React from 'react';
import styled from 'styled-components';

import type { Icon } from '../../icons/types';
import { getIconFileForSize } from '../../icons/utils';
import TitleBarButtons from './TitleBarButtons';

export interface TitleBarProps {
  isActive: boolean;
}

interface Props extends TitleBarProps {
  close(): void;

  drag(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;

  icon: Icon;
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
  ${(props) => props.theme.window.TitleBarTitleContainer}
`;

const TitleBarTitle = styled.div`
  ${(props) => props.theme.window.TitleBarTitle}
`;

const TitleBarIconElement = styled.img`
  ${(props) => props.theme.window.TitleBarIcon}
`;

const TitleBarIcon = ({ icon }: { icon: Icon }) => {
  if (!icon) {
    return null;
  }

  const iconFile = getIconFileForSize(icon);
  return <TitleBarIconElement src={iconFile} alt="Window icon" />;
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
        <TitleBarIcon icon={icon} />
        <TitleBarTitle>{title}</TitleBarTitle>
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
