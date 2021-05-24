import React from 'react';
import styled from 'styled-components';

import { WindowType } from '../../window/types';
import { WindowManager } from '../types';
import TaskbarButton from './TaskbarButton';

export interface TaskbarProps {
  activeWindowId: WindowManager['activeWindowId'];
  windows: WindowManager['windows'];
  restoreWindow: WindowManager['restoreWindow'];
}

const TaskbarElement = styled.div`
  background: white;
  border-top: 1px solid black;
  bottom: 0;
  display: inline-block;
  height: 28px;
  overflow-x: visible;
  padding: 2px;
  position: absolute;
  width: 100%;
  white-space: nowrap;
`;

const Taskbar = ({
  restoreWindow,
  activeWindowId,
  windows,
}: TaskbarProps): JSX.Element => {
  const mapButtons = ([id, window]: [id: string, window: WindowType]) => (
    <TaskbarButton
      onClick={() => restoreWindow(id)}
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
