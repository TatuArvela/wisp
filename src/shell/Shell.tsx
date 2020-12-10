import React from 'react';
import styled from 'styled-components';

import RenderedWindow from '../window/RenderedWindow';
import Taskbar from './Taskbar/Taskbar';
import { ShellChildren } from './types';
import useWindowManager from './windowManager/useWindowManager';

const ShellElement = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(10, 36, 106);
  color: white;
  font-family: sans-serif;
  font-size: 14px;

  * {
    box-sizing: border-box;
  }
`;

type ShellProps = {
  children: ShellChildren;
};

const Shell = ({ children }: ShellProps): JSX.Element => {
  const windowManager = useWindowManager(children);
  const {
    activeWindowId,
    activateWindow,
    dragWindow,
    windowOrder,
    windows,
  } = windowManager;

  return (
    <ShellElement>
      {windowOrder.map((id) => {
        const window = windows.get(id);
        return (
          <RenderedWindow
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...window}
            activateWindow={activateWindow}
            dragWindow={dragWindow}
            isActiveWindow={window.id === activeWindowId}
          >
            {window.children}
          </RenderedWindow>
        );
      })}

      <Taskbar
        activeWindowId={activeWindowId}
        activateWindow={activateWindow}
        windows={windows}
      />
    </ShellElement>
  );
};

export default Shell;
