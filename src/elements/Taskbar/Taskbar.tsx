import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { useWindowManager } from '../../windowManager/hooks';
import { WindowType } from '../../windowManager/types';
import TaskbarButton from './TaskbarButton';

const TaskbarElement = styled.div`
  ${(props) => props.theme.elements.Taskbar}
`;

const Taskbar = (): JSX.Element => {
  const { activeWindowId, windows, restoreWindow, setViewportWindowMargins } =
    useWindowManager();
  const taskbarRef = React.useRef<HTMLDivElement>();

  const getTaskbarHeight = useCallback(
    () => taskbarRef.current?.offsetHeight || 0,
    [taskbarRef]
  );

  useEffect(() => {
    setViewportWindowMargins({ bottom: getTaskbarHeight() });
    return () => setViewportWindowMargins({ bottom: 0 });
  }, [getTaskbarHeight, setViewportWindowMargins]);

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
    <TaskbarElement ref={taskbarRef}>
      {Array.from(windows.entries()).map(mapButtons)}
    </TaskbarElement>
  );
};

export default Taskbar;
