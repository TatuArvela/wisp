import React from 'react';

import { Desktop, MessageBox, Window, Wisp } from '../src';

export default {
  component: Wisp,
  title: 'Wisp/Basics',
};

export const HelloWorld = {
  args: {
    children: (
      <Window id="hello world" title="Hello World" icon="wisp">
        Check out Wisp
      </Window>
    ),
  },
};

export const NoDefaultElements = {
  args: {
    enableDefaultElements: false,
    enableVersionInfo: false,
    enableWindowMinimize: false,
    children: (
      <>
        <Desktop />
        <MessageBox id="warning" title="Warning">
          Warning!
        </MessageBox>
        <MessageBox id="error" title="Error" messageBoxIcon="error">
          Error!
        </MessageBox>
        <MessageBox
          id="hello world"
          title="Hello World"
          icon="wisp"
          messageBoxIcon="wisp"
        >
          Check out Wisp
        </MessageBox>
      </>
    ),
  },
};

export const MultipleWindows = {
  args: {
    children: (
      <>
        <MessageBox id="1" title="Uno">
          Alert!
        </MessageBox>
        <MessageBox id="2" title="Dos">
          Warning!
        </MessageBox>
        <Window id="3" title="Tres" width={400} height={300} isMinimized={true}>
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
        <Window
          id="4"
          title="Quatro"
          isResizable={false}
          isMinimizable={false}
          showAsTask={false}
        >
          Not visible in task bar!
        </Window>
      </>
    ),
  },
};
