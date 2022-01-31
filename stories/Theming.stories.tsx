import React from 'react';

import { AlertWindow, ThemeSwitcher, Wisp } from '../src/index';
import testTheme from '../src/themes/test/theme';

export default {
  component: Wisp,
  title: 'Wisp/Theming',
};

export const ThemeSwitcherStory = (): JSX.Element => (
  <Wisp>
    <ThemeSwitcher />
  </Wisp>
);
ThemeSwitcherStory.story = {
  name: 'Theme Switcher',
};

export const TestTheme = (): JSX.Element => (
  <Wisp themes={[testTheme]}>
    <AlertWindow id={'1'} title={'TEST'}>
      TEEEST
    </AlertWindow>
  </Wisp>
);