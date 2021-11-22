import React from 'react';

import { ThemeManager } from './types';

export const ThemeManagerContext = React.createContext<ThemeManager>(undefined);
ThemeManagerContext.displayName = 'ThemeManagerContext';

export const ThemeManagerProvider = ThemeManagerContext.Provider;
