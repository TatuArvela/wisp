import React from 'react';

import { Window, Wisp } from '../../src/index';

const ControlStoryWrapper = ({ children }: { children: React.ReactNode }) => (
  <Wisp enableDefaultElements={false} enableWindowMinimize={false}>
    <Window
      id="1"
      initialState={{
        width: 300,
        height: 120,
      }}
    >
      {children}
    </Window>
  </Wisp>
);

export default ControlStoryWrapper;
