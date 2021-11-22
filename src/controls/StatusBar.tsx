import React from 'react';
import styled from 'styled-components';

import ResizeHandle from './ResizeHandle';

type StatusBarProps = {
  isResizable?: boolean;
  windowId: string;
};

const StatusBarElement = styled.div`
  ${(props) => props.theme.controls.StatusBar}
`;

const StatusBar = ({ isResizable, windowId }: StatusBarProps): JSX.Element => (
  <StatusBarElement>
    {isResizable && <ResizeHandle windowId={windowId} />}
  </StatusBarElement>
);

export default StatusBar;
