import React from 'react';

import { Button, Window, Wisp } from '../../src/index';

export default {
  component: Wisp,
  title: 'controls/Button',
};

export const ButtonStory = (): JSX.Element => (
  <Wisp enableDefaultElements={false}>
    <Window id="1">
      <Button>Button</Button>
    </Window>
  </Wisp>
);
ButtonStory.story = {
  name: 'Button',
};
