import React from 'react';

import Button from '../controls/Button';
import Window from '../window/Window';
import Shell from './Shell';

export default {
  component: Shell,
  title: 'Shell',
};

export const Default = (): JSX.Element => (
  <Shell>
    <Window id="1" title="Uno">
      <p>Alert!</p>
      <Button type="button" style={{ width: '100px', margin: 'auto' }}>
        OK
      </Button>
    </Window>
    <Window id="2" title="Dos">
      <p>Warning!</p>
      <Button type="button" style={{ width: '100px', margin: 'auto' }}>
        OK
      </Button>
    </Window>
  </Shell>
);
