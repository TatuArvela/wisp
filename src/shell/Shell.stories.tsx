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
      <button type="button">OK</button>
    </Window>
    <Window id="2" title="Dos">
      <p>Warning!</p>
      <button type="button">OK</button>
    </Window>
  </Shell>
);
