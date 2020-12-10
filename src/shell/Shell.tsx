import React from 'react';
import styled from 'styled-components';

import { ShellChildren } from './types';
import useWindowManager from './windowManager/useWindowManager';

const Taskbar = styled.div`
  width: 100%;
  height: 32px;
  position: absolute;
  bottom: 0;
  background: white;
  border-top: 1px solid black;
`;

const ShellComponent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(10, 36, 106);
  color: white;

  * {
    box-sizing: border-box;
  }
`;

type ShellProps = {
  children: ShellChildren;
};

const Shell = ({ children: windows }: ShellProps): JSX.Element => {
  const windowManager = useWindowManager(windows);

  return (
    <ShellComponent>
      {windowManager.windowOrder.map((id) => {
        const window = windowManager.windows.get(id);
        return window.children;
      })}

      <Taskbar>
        {Array.from(windowManager.windows.entries()).map(([id, window]) => (
          <button
            type="button"
            onClick={() => windowManager.activateWindow(id)}
          >
            {window.title}
          </button>
        ))}
      </Taskbar>
    </ShellComponent>
  );
};

export default Shell;
