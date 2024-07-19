import React from 'react';

import {
  MessageBox,
  ThemeSwitcher as ThemeSwitcherComponent,
  Wisp,
} from '../src';

export default {
  component: Wisp,
  title: 'Wisp/Theming',
};

export const ThemeSwitcher = {
  args: {
    children: (
      <>
        <ThemeSwitcherComponent />
        <MessageBox id={'1'} title={'TEST'} positionX={240}>
          TEEEST
        </MessageBox>
      </>
    ),
  },
};
