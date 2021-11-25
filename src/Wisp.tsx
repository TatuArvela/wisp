import React from 'react';

import { defaultConfig, WispConfig } from './config';
import DefaultElements from './elements/DefaultElements';
import ThemeManager from './themeManager/ThemeManager';
import WindowManager from './windowManager/WindowManager';

type WispProps = {
  children: React.ReactNode;
} & Partial<WispConfig>;

const Wisp = ({ children, ...rest }: WispProps): JSX.Element => {
  const config = { ...defaultConfig, ...rest };

  return (
    <ThemeManager themes={config.themes}>
      <WindowManager config={config}>
        {config.enableDefaultElements && <DefaultElements />}
        {children}
      </WindowManager>
    </ThemeManager>
  );
};

export default Wisp;
