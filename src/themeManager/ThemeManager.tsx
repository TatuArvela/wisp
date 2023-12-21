import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { useConfig } from '../ConfigContext';
import defaultTheme from '../themes/default/theme';
import { FullTheme, Theme } from '../themes/types';
import { ThemeManagerProvider } from './ThemeManagerContext';
import { mergeDeep } from './utils';

interface Props {
  children: React.ReactNode;
}

const ThemeManager = ({ children }: Props) => {
  const { themes } = useConfig();

  const baseOnDefault = (theme: Theme): FullTheme => {
    if (theme.id === defaultTheme.id) {
      return theme as FullTheme;
    }
    return mergeDeep(defaultTheme, theme);
  };
  const initialTheme = baseOnDefault(themes[0]);

  const [theme, setTheme] = useState<FullTheme>(initialTheme);

  const changeTheme = (theme: FullTheme) => {
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
