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
    <Window id="3" title="Tres" width={400} height={300} isMinimized>
      <p>Regular window</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
        tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea
        commodi consequat. Quis aute iure reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
        cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </p>
    </Window>
    <Window id="1" title="Uno" isResizable={false}>
      <p>Alert!</p>
      <Button type="button" style={{ width: '60px', margin: 'auto' }}>
        OK
      </Button>
    </Window>
    <Window id="2" title="Dos" isResizable={false}>
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
      title="Static note"
      width={200}
    >
      <p>Immovable object</p>
    </Window>
    <Window
      height={200}
      id="2"
      isClosable={false}
      isMaximizable={false}
      isMinimizable={false}
      positionX={100}
      positionY={100}
      title="Resizable sticky note"
      width={200}
    >
      <p>Make me big!</p>
    </Window>
    <Window
      height={200}
      id="3"
      isClosable={false}
      isMaximizable={false}
      isMinimizable={false}
      isResizable={false}
      positionX={100}
      positionY={100}
      title="Sticky note"
      width={200}
    >
      <p>Can&apos;t close me!</p>
    </Window>
  </Shell>
);
