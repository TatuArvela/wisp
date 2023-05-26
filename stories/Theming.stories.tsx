import React from 'react';

import {
  AlertWindow,
  ThemeSwitcher as ThemeSwitcherComponent,
  Wisp,
} from '../src/index';
import defaultTheme from '../src/themes/default/theme';
import testTheme from '../src/themes/test/theme';

export default {
  component: Wisp,
  title: 'Wisp/Theming',
};

export const ThemeSwitcher = {
  args: {
    themes: [defaultTheme, testTheme],
    children: <ThemeSwitcherComponent />,
  },
};

export const TestTheme = {
  args: {
    themes: [testTheme],
    enableVersionInfo: false,
    children: (
      <AlertWindow id={'1'} title={'TEST'}>
        TEEEST
      </AlertWindow>
    ),
  },
};
