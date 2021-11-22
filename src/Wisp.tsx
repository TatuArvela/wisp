import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { defaultConfig, WispConfig } from './config';
import defaultTheme from './themes/default/theme';
import useWindowManager from './windowManager/useWindowManager';
import { WindowManagerProvider } from './windowManager/WindowManagerContext';

type WispProps = {
  children: React.ReactNode;
} & Partial<WispConfig>;

const ViewPort = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: sans-serif;
`;

const Wisp = ({ children, ...rest }: WispProps): JSX.Element => {
  const config = { ...defaultConfig, ...rest };
  const theme = defaultTheme;
  const viewportRef = React.useRef<HTMLDivElement>();
  const windowManager = useWindowManager(config, viewportRef);

  return (
    <ThemeProvider theme={theme}>
      <WindowManagerProvider value={windowManager}>
        <ViewPort ref={viewportRef}>{children}</ViewPort>
      </WindowManagerProvider>
    </ThemeProvider>
  );
};

export default Wisp;
