import React from 'react';

import Desktop from '../src/elements/Desktop';
import Taskbar from '../src/elements/Taskbar/Taskbar';
import ThemeSwitcher from '../src/elements/ThemeSwitcher';
import VersionInfo from '../src/elements/VersionInfo';
import Wisp from '../src/Wisp';

export default {
  component: Wisp,
  title: 'Wisp/Theming',
};

export const ThemeSwitcherStory = (): JSX.Element => (
  <Wisp>
    <Desktop>
      <VersionInfo />
    </Desktop>
    <Taskbar />
    <ThemeSwitcher />
  </Wisp>
);
ThemeSwitcherStory.story = {
  name: 'Theme Switcher',
};
