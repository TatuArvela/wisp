import React from 'react';
import styled from 'styled-components';

import { windowResizeHandler } from '../window/handlers/windowResizeHandler';
import { useWindowManager } from '../windowManager/hooks';
import { Direction, WindowType } from '../windowManager/types';

export const StatusBarThemeProperties = ['ResizeHandle', 'StatusBar'] as const;

interface StatusBarProps {
  children?: React.ReactNode;
  showResizeHandle?: boolean;
  window?: WindowType;
}

const StatusBarElement = styled.div`
  ${(props) => props.theme.controls.StatusBar}
`;

const StatusBar = ({ children, showResizeHandle, window }: StatusBarProps) => {
  return (
    <StatusBarElement>
      {children}
      {showResizeHandle && <ResizeHandle window={window} />}
    </StatusBarElement>
  );
};

interface ResizeHandleProps {
  window: WindowType;
}

const ResizeHandleElement = styled.div`
  ${(props) => props.theme.controls.ResizeHandle}
`;

const ResizeHandle = ({ window }: ResizeHandleProps): JSX.Element => {
  const windowManager = useWindowManager();
  const eventHandler = windowResizeHandler(windowManager, window);

  return (
    <ResizeHandleElement onMouseDown={(e) => eventHandler(e, Direction.SE)} />
  );
};

export default StatusBar;
