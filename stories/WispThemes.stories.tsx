import React from 'react';

import ThemeSwitcher from '../src/elements/ThemeSwitcher';
import testTheme from '../src/themes/test/theme';
import AlertWindow from '../src/window/AlertWindow';
import Wisp from '../src/Wisp';

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
