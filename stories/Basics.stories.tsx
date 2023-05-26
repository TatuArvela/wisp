import React from 'react';

import { AlertWindow, Desktop, Window, Wisp } from '../src/index';

export default {
  component: Wisp,
  title: 'Wisp/Basics',
};

export const HelloWorld = {
  args: {
    children: (
      <Window id="hello world" initialState={{ title: 'Hello World' }}>
        Check out Wisp
      </Window>
    ),
  },
};

export const NoDefaultElements = {
  args: {
    enableDefaultElements: false,
    enableVersionInfo: false,
    enableWindowMinimzie: false,
    children: (
      <>
        <Desktop />
        <Window id="hello world" initialState={{ title: 'Hello World' }}>
          Check out Wisp
        </Window>
      </>
    ),
  },
};

export const MultipleWindows = {
  args: {
    children: (
      <>
        <Window
          id="3"
          initialState={{
            title: 'Tres',
            width: 400,
            height: 300,
            isMinimized: true,
          }}
        >
          <p>Regular window</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
            ea commodi consequat. Quis aute iure reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </Window>
        <AlertWindow id="1" title="Uno">
          Alert!
        </AlertWindow>
        <AlertWindow id="2" title="Dos">
          Warning!
        </AlertWindow>
      </>
    ),
  },
};
