import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../themes/default/theme';
import { Theme } from '../themes/types';
import { ThemeManagerProvider } from './ThemeManagerContext';
import { mergeDeep } from './utils';

interface Props {
  children: React.ReactNode;
  themes: Theme[];
}

const ThemeManager = ({ children, themes }: Props) => {
  const baseOnDefault = (theme: Theme) => {
    if (theme.id === defaultTheme.id) {
      return theme;
    }
    return mergeDeep(defaultTheme, theme);
  };
  const initialTheme = baseOnDefault(themes[0]);

  const [theme, setTheme] = useState<Theme>(initialTheme);

  const changeTheme = (theme: Theme) => {
    setTheme(baseOnDefault(theme));
  };

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
