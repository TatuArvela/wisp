import React from 'react';
import styled from 'styled-components';

import defaultConfig from './defaultConfig';
import { WispConfig } from './types';
import { useWindowManager } from './windowManager/useWindowManager';
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
  const windowManager = useWindowManager(config);

  return (
    <WindowManagerProvider value={windowManager}>
      <ViewPort ref={windowManager.viewportRef}>{children}</ViewPort>
    </WindowManagerProvider>
  );
};

export default Wisp;
