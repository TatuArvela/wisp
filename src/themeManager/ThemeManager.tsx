import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme } from '../themes/types';

type Props = {
  themes: Theme[];
};

type ThemeManagerType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
  themes: Theme[];
};

export const ThemeManagerContext =
  React.createContext<ThemeManagerType>(undefined);
ThemeManagerContext.displayName = 'ThemeManagerContext';

const ThemeManagerProvider = ThemeManagerContext.Provider;

export function useThemeManager(): ThemeManagerType {
  return React.useContext<ThemeManagerType>(ThemeManagerContext);
}

const ThemeManager: React.FC<Props> = ({ children, themes }) => {
  const [theme, changeTheme] = useState<Theme>(themes[0]);

  const themeManagerContext = {
    theme,
    changeTheme,
    themes,
  };

  return (
    <ThemeManagerProvider value={themeManagerContext}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeManagerProvider>
  );
};

export default ThemeManager;
