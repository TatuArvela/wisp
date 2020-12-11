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
      <Button type="button" style={{ width: '60px', margin: 'auto' }}>
        OK
      </Button>
    </Window>
    <Window id="2" title="Dos">
      <p>Warning!</p>
      <Button type="button" style={{ width: '60px', margin: 'auto' }}>
        OK
      </Button>
    </Window>
  </Shell>
);

export const Minimal = (): JSX.Element => (
  <Shell
    config={{
      disableTaskbar: true,
      disableVersionInformation: true,
      transparentBackground: true,
    }}
  >
    <Window
      height={200}
      id="1"
      isClosable={false}
      isDraggable={false}
      isMaximizable={false}
      isMinimizable={false}
      isResizable={false}
      positionX={100}
      positionY={100}
      title="No control"
      width={200}
    >
      <p>I am immovable</p>
    </Window>
  </Shell>
);
