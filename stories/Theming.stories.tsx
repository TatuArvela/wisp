import React from 'react';

import {
  AlertWindow,
  ThemeSwitcher as ThemeSwitcherComponent,
  Wisp,
} from '../src/index';
import defaultTheme from '../src/themes/default/theme';
import testTheme from './testTheme/theme';

export default {
  component: Wisp,
  title: 'Wisp/Theming',
};

export const ThemeSwitcher = {
  args: {
    children: (
      <>
        <ThemeSwitcherComponent />
        <AlertWindow id={'1'} title={'TEST'} positionX={240}>
          TEEEST
        </AlertWindow>
      </>
    ),
  },
};
