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

const VersionInformation = styled.p`
  position: absolute;
  right: 0;
  margin: 4px;
  bottom: 30px;
  text-align: right;
`;

const Shell = ({ children }: ShellProps): JSX.Element => {
  const shellElementRef = React.useRef<HTMLDivElement>();
  const windowManager = useWindowManager(children, shellElementRef);
  const {
    activeWindowId,
    activateWindow,
    dragWindow,
    resizeWindow,
    windowOrder,
    windows,
  } = windowManager;

  return (
    <ShellElement ref={shellElementRef}>
      {windowOrder.map((id) => {
        const window = windows.get(id);
        return (
          <RenderedWindow
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...window}
            activateWindow={activateWindow}
            dragWindow={dragWindow}
            resizeWindow={resizeWindow}
            isActiveWindow={window.id === activeWindowId}
          >
            {window.children}
          </RenderedWindow>
        );
      })}

      <VersionInformation>react-classic-shell Version 0.1.0</VersionInformation>

      <Taskbar
        activeWindowId={activeWindowId}
        activateWindow={activateWindow}
        windows={windows}
      />
    </ShellElement>
  );
};

export default Shell;
