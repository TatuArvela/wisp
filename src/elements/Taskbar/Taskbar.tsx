import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { useWindowManager } from '../../windowManager/hooks';
import { WindowType } from '../../windowManager/types';
import TaskbarButton from './TaskbarButton';

const TaskbarElement = styled.div`
  ${(props) => props.theme.elements.Taskbar}
`;

const Taskbar = (): JSX.Element => {
  const { activeWindowId, windows, restoreWindow, setWindowMargins } =
    useWindowManager();
  const taskbarRef = React.useRef<HTMLDivElement>();

  const getTaskbarHeight = useCallback(
    () => taskbarRef.current?.offsetHeight || 0,
    [taskbarRef]
  );

  useEffect(() => {
    setWindowMargins({ bottom: getTaskbarHeight() });
    return () => setWindowMargins({ bottom: 0 });
  }, [getTaskbarHeight, setWindowMargins]);

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
