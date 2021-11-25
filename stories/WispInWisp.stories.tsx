import React from 'react';

import Desktop from '../src/elements/Desktop';
import Taskbar from '../src/elements/Taskbar/Taskbar';
import Window from '../src/window/Window';
import Wisp from '../src/Wisp';

export default {
  component: Wisp,
  title: 'Wisp/Advanced Usage',
};

export const WispInWisp = (): JSX.Element => (
  <Wisp>
    <Desktop />
    <Window
      id="1"
      initialState={{
        title: 'Parent window',
        width: 600,
        height: 480,
      }}
    >
      <div
        style={{
          border: '1px solid black',
          boxSizing: 'border-box',
          height: '100%',
          width: '100%',
        }}
      >
        <Wisp>
          <Desktop />
          <Window id="2" initialState={{ title: 'Child window' }}>
            Test
          </Window>
          <Taskbar />
        </Wisp>
      </div>
    </Window>
    <Taskbar />
  </Wisp>
);