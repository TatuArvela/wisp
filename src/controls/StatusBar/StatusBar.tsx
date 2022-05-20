import React from 'react';
import styled from 'styled-components';

import { WindowType } from '../../windowManager/types';
import ResizeHandle from './ResizeHandle';

interface StatusBarProps {
  children: React.ReactNode;
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

export default StatusBar;
