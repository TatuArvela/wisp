import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme } from '../themes/types';
import { ThemeManagerProvider } from './ThemeManagerContext';

type Props = {
  themes: Theme[];
};

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
