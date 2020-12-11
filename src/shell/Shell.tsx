import React from 'react';

import RenderedWindow from '../window/RenderedWindow';
import { WindowProps } from '../window/types';
import ShellElement from './components/ShellElement';
import Taskbar from './components/Taskbar';
import VersionInformation from './components/VersionInformation';
import WindowArea from './components/WindowArea';
import defaultConfig from './defaultConfig';
import { Config } from './types';
import initializeWindows from './windowManager/initializeWindows';
import useWindowManager from './windowManager/useWindowManager';

type ShellProps = {
  children: React.ReactElement<WindowProps> | React.ReactElement<WindowProps>[];
  // eslint-disable-next-line react/require-default-props
  config?: Partial<Config>;
};

const Shell = ({ children, config: _config = {} }: ShellProps): JSX.Element => {
  const config = { ...defaultConfig, ..._config };
  const windowAreaRef = React.useRef<HTMLDivElement>();

  const windowManager = useWindowManager(
    config,
    initializeWindows(config, children),
    windowAreaRef
  );
  const { activeWindowId, windowOrder, windows, restoreWindow } = windowManager;

  return (
    <ShellElement>
      {!config.disableVersionInformation && <VersionInformation />}

      <WindowArea config={config} ref={windowAreaRef}>
        {windowOrder.map((id) => {
          const window = windows.get(id);
          return (
            <RenderedWindow
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...window}
              windowManager={windowManager}
            >
              {window.children}
            </RenderedWindow>
          );
        })}
      </WindowArea>

      {!config.disableTaskbar && (
        <Taskbar
          activeWindowId={activeWindowId}
          restoreWindow={restoreWindow}
          windows={windows}
        />
      )}
    </ShellElement>
  );
};

export default Shell;
