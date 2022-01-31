import React from 'react';
import styled from 'styled-components';

import { WindowType } from '../../windowManager/types';
import ResizeHandle from './ResizeHandle';

type StatusBarProps = {
  showResizeHandle?: boolean;
  window?: WindowType;
};

const StatusBarElement = styled.div`
  ${(props) => props.theme.controls.StatusBar}
`;

const StatusBar: React.FC<StatusBarProps> = ({
  children,
  showResizeHandle,
  window,
}) => {
  return (
    <StatusBarElement>
      {children}
      {showResizeHandle && <ResizeHandle window={window} />}
    </StatusBarElement>
  );
};

export default StatusBar;