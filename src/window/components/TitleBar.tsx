import React from 'react';
import styled from 'styled-components';

import type { Icon } from '../../icons';
import { getIconFileForSize } from '../../icons/utils';
import { useThemeManager } from '../../themeManager/hooks';
import TitleBarButtons from './TitleBarButtons';

export const TitleBarThemeProperties = [
  'TitleBarElement',
  'TitleBarTitleContainer',
  'TitleBarTitle',
  'TitleBarIcon',
] as const;

export interface TitleBarElementProps {
  isActive: boolean;
}

const TitleBarElement = styled.div<TitleBarElementProps>`
  ${(props) => props.theme.window.TitleBarElement}
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

const TitleBarIcon = ({ icon }: { icon: string | Icon }) => {
  const { theme } = useThemeManager();

  const resolvedIcon = typeof icon === 'string' ? theme.icons[icon] : icon;
  if (!resolvedIcon) {
    return null;
  }

  const iconFile = getIconFileForSize(resolvedIcon);
  return <TitleBarIconElement src={iconFile} />;
};

export interface TitleBarProps extends TitleBarElementProps {
  close(): void;
  drag(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  icon: Icon;
  isClosable: boolean;
  isMaximizable: boolean;
  isMaximized: boolean;
  isMinimizable: boolean;
  maximize(): void;
  minimize(): void;
  alwaysShowCloseButton: boolean;
  title: string;
  unmaximize(): void;
}

const TitleBar = ({
  alwaysShowCloseButton,
  close,
  drag,
  icon,
  isActive,
  isClosable,
  isMaximizable,
  isMaximized,
  isMinimizable,
  maximize,
  minimize,
  title,
  unmaximize,
}: TitleBarProps) => {
  const onTitleDoubleClick = () => {
    isMaximizable && (isMaximized ? unmaximize() : maximize());
  };

  return (
    <TitleBarElement isActive={isActive}>
      <TitleContainer onMouseDown={drag} onDoubleClick={onTitleDoubleClick}>
        {icon !== undefined && <TitleBarIcon icon={icon} />}
        <TitleBarTitle>{title}</TitleBarTitle>
      </TitleContainer>
      <TitleBarButtons
        alwaysShowCloseButton={alwaysShowCloseButton}
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
