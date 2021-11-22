import React from 'react';
import styled from 'styled-components';

import { useWindowManager } from '../../windowManager/hooks';
import { WindowType } from '../../windowManager/types';
import TaskbarButton from './TaskbarButton';

const TaskbarElement = styled.div`
  ${(props) => props.theme.elements.Taskbar}
`;

const Taskbar = (): JSX.Element => {
  const { activeWindowId, windows, restoreWindow } = useWindowManager();

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
