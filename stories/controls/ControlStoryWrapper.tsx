import React from 'react';

import { Window, Wisp } from '../../src/index';

const ControlStoryWrapper = ({ children }: { children: React.ReactNode }) => (
  <Wisp enableDefaultElements={false}>
    <Window id="1">{children}</Window>
  </Wisp>
);

export default ControlStoryWrapper;
