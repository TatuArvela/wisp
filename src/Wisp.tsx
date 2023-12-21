import React from 'react';

import { WispConfig } from './config';
import { ConfigProvider } from './ConfigContext';
import DefaultElements from './elements/DefaultElements';
import ThemeManager from './themeManager/ThemeManager';
import WindowManager from './windowManager/WindowManager';

export interface WispProps extends Partial<WispConfig> {
  children: React.ReactNode;
}

const Wisp = ({ children, ...config }: WispProps) => (
  <ConfigProvider {...config}>
    <ThemeManager>
      <WindowManager>
        <DefaultElements />
        {children}
      </WindowManager>
    </ThemeManager>
  </ConfigProvider>
);

export default Wisp;
