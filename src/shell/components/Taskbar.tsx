import React from 'react';
import styled from 'styled-components';

import { WindowType } from '../../window/types';
import { useWindowManagerContext } from '../windowManager/WindowManagerContext';
import TaskbarButton from './TaskbarButton';

const TaskbarElement = styled.div`
  background: white;
  border-top: 1px solid black;
  box-sizing: border-box;
  bottom: 0;
  display: inline-block;
  height: 28px;
  overflow-x: visible;
  padding: 2px;
  position: absolute;
  width: 100%;
  white-space: nowrap;
`;

const Taskbar = (): JSX.Element => {
  const { activeWindowId, windows, restoreWindow } = useWindowManagerContext();

  const mapButtons = ([id, window]: [id: string, window: WindowType]) => (
    <TaskbarButton
      key={id}
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
