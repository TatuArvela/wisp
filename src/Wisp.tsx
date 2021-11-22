import React from 'react';
import styled from 'styled-components';

import { defaultConfig, WispConfig } from './config';
import DefaultElements from './elements/DefaultElements';
import ThemeManager from './themeManager/ThemeManager';
import WindowManager from './windowManager/WindowManager';

type WispProps = {
  children: React.ReactNode;
} & Partial<WispConfig>;

const Viewport = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: sans-serif;
`;

const Wisp = ({ children, ...rest }: WispProps): JSX.Element => {
  const config = { ...defaultConfig, ...rest };
  const viewportRef = React.useRef<HTMLDivElement>();

  return (
    <ThemeManager themes={config.themes}>
      <WindowManager config={config} viewportRef={viewportRef}>
        <Viewport ref={viewportRef}>
          {config.enableDefaultElements && <DefaultElements />}
          {children}
        </Viewport>
      </WindowManager>
    </ThemeManager>
  );
};

export default Wisp;
