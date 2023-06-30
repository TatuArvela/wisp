import React from 'react';
import styled from 'styled-components';

import { windowResizeHandler } from '../window/handlers/windowResizeHandler';
import { useWindow } from '../window/WindowContext';
import { useWindowManager } from '../windowManager/hooks';
import { Direction } from '../windowManager/types';

export const StatusBarThemeProperties = ['ResizeHandle', 'StatusBar'] as const;

interface StatusBarProps {
  children?: React.ReactNode;
  showResizeHandle?: boolean;
}

const StatusBarElement = styled.div`
  ${(props) => props.theme.controls.StatusBar}
`;

const StatusBar = ({ children, showResizeHandle }: StatusBarProps) => {
  return (
    <StatusBarElement>
      {children}
      {showResizeHandle && <ResizeHandle />}
    </StatusBarElement>
  );
};

const ResizeHandleElement = styled.div`
  ${(props) => props.theme.controls.ResizeHandle}
`;

const ResizeHandle = (): JSX.Element => {
  const windowManager = useWindowManager();
  const window = useWindow();
  const eventHandler = windowResizeHandler(windowManager, window);

  return (
    <ResizeHandleElement onMouseDown={(e) => eventHandler(e, Direction.SE)} />
  );
};

export default StatusBar;
