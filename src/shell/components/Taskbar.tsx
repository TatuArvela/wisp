import React from 'react';
import styled from 'styled-components';

import { WindowType } from '../../window/types';
import { WindowManager } from '../types';
import TaskbarButton from './TaskbarButton';

export interface TaskbarProps {
  activeWindowId: WindowManager['activeWindowId'];
  windows: WindowManager['windows'];
  activateWindow: WindowManager['activateWindow'];
}

const TaskbarElement = styled.div`
  width: 100%;
  height: 28px;
  position: absolute;
  bottom: 0;
  background: white;
  border-top: 1px solid black;
  padding: 2px;
`;

const Taskbar = ({
  activateWindow,
  activeWindowId,
  windows,
}: TaskbarProps): JSX.Element => {
  const mapButtons = ([id, window]: [id: string, window: WindowType]) => (
    <TaskbarButton
      onClick={() => activateWindow(id)}
      active={id === activeWindowId}
    >
      {window.title}
    </TaskbarButton>
  );

  return (
    <TaskbarElement>
      {Array.from(windows.entries()).map(mapButtons)}
    </TaskbarElement>
  );
};

export default Taskbar;
