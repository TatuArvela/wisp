import { Decorator } from '@storybook/react';
import React, { useContext } from 'react';

import { WispConfig } from '../config';

export const StorybookConfigContext = React.createContext<Partial<WispConfig>>(
  {}
);

export const StorybookConfigProvider = ({
  children,
  ...config
}: Partial<WispConfig> & { children?: React.ReactNode }) => (
  <StorybookConfigContext.Provider value={{ ...config }}>
    {children}
  </StorybookConfigContext.Provider>
);

export const useStorybookConfig = () => {
  const config = useContext(StorybookConfigContext);
  return config ?? {};
};

export const storybookConfigContextDecorator =
  (config: Partial<WispConfig>): Decorator =>
  (Story) => (
    <StorybookConfigProvider {...config}>
      <Story />
    </StorybookConfigProvider>
  );
