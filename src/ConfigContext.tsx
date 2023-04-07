import React, { useContext } from 'react';

import { defaultConfig, WispConfig } from './config';

export const ConfigContext = React.createContext<WispConfig>(defaultConfig);

export const ConfigProvider = ({
  children,
  ...config
}: Partial<WispConfig> & { children?: React.ReactNode }) => (
  <ConfigContext.Provider value={{ ...defaultConfig, ...config }}>
    {children}
  </ConfigContext.Provider>
);

export const useConfig = () => {
  const config = useContext(ConfigContext);
  return config;
};
