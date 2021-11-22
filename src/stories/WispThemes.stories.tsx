import React from 'react';

import Desktop from '../elements/Desktop';
import Taskbar from '../elements/Taskbar/Taskbar';
import ThemeSwitcher from '../elements/ThemeSwitcher';
import VersionInfo from '../elements/VersionInfo';
import Wisp from '../Wisp';

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
