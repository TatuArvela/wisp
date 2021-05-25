import React from 'react';
import styled from 'styled-components';

import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import VersionInfo from './components/VersionInfo';
import WindowArea from './components/WindowArea';
import defaultConfig from './defaultConfig';
import { ShellConfig } from './types';
import { useWindowManager } from './windowManager/useWindowManager';
import { WindowManagerProvider } from './windowManager/WindowManagerContext';

type ShellProps = {
  children: React.ReactNode;
} & Partial<ShellConfig>;

const ShellElement = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Shell = ({ children, ...rest }: ShellProps): JSX.Element => {
  const config = { ...defaultConfig, ...rest };
  const windowManager = useWindowManager(config);

  return (
    <WindowManagerProvider value={windowManager}>
      <ShellElement>
        <Desktop config={config}>
          {config.isVersionInfoEnabled && <VersionInfo />}
        </Desktop>

        <WindowArea config={config} ref={windowManager.windowAreaRef}>
          {children}
        </WindowArea>

        {config.isTaskbarEnabled && <Taskbar />}
      </ShellElement>
    </WindowManagerProvider>
  );
};

export default Shell;
