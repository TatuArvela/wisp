import React from 'react';

import { ThemeManagerContext } from './ThemeManagerContext';
import { ThemeManager } from './types';

export function useThemeManager(): ThemeManager {
  return React.useContext<ThemeManager>(ThemeManagerContext);
}
