import React, { useContext } from 'react';

import { defaultConfig, WispConfig } from './config';
import { useStorybookConfig } from './storyDecorators/StorybookConfigContext';

export const ConfigContext = React.createContext<WispConfig>(defaultConfig);

export const ConfigProvider = ({
  children,
  ...config
}: Partial<WispConfig> & { children?: React.ReactNode }) => {
  const storybookConfig = useStorybookConfig();
  return (
    <ConfigContext.Provider
      value={{ ...defaultConfig, ...storybookConfig, ...config }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const config = useContext(ConfigContext);
  return config;
};
