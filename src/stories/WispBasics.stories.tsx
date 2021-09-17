// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useState } from '@storybook/addons';
import React from 'react';

import Button from '../controls/Button';
import Desktop from '../elements/Desktop';
import Taskbar from '../elements/Taskbar/Taskbar';
import VersionInfo from '../elements/VersionInfo';
import Window from '../window/Window';
import Wisp from '../Wisp';

export default {
  component: Wisp,
  title: 'Wisp/Basics',
};

export const DesktopStory = (): JSX.Element => (
  <Wisp>
    <Desktop>
      <VersionInfo />
    </Desktop>
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
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea
        commodi consequat. Quis aute iure reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
        cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </p>
    </Window>
    <Window
      id="1"
      initialState={{
        title: 'Uno',
        isMaximizable: false,
        isMinimizable: false,
        isResizable: false,
      }}
    >
      <p>Alert!</p>
      <Button type="button" style={{ width: '60px', margin: 'auto' }}>
        OK
      </Button>
    </Window>
    <Window
      id="2"
      initialState={{
        title: 'Dos',
        isMaximizable: false,
        isMinimizable: false,
        isResizable: false,
      }}
    >
      <p>Warning!</p>
      <Button type="button" style={{ width: '60px', margin: 'auto' }}>
        OK
      </Button>
    </Window>
    <Taskbar />
  </Wisp>
);
DesktopStory.story = {
  name: 'Desktop',
};

export const StickyNotes = (): JSX.Element => {
  const commonState = {
    height: 200,
    isClosable: false,
    isMaximizable: false,
    isMinimizable: false,
    positionX: 100,
    positionY: 100,
    width: 200,
  };
  return (
    <Wisp>
      <Window
        id="1"
        initialState={{
          ...commonState,
          isDraggable: false,
          isResizable: false,
          title: 'Static note',
        }}
      >
        <p>Immovable object</p>
      </Window>
      <Window
        id="2"
        initialState={{
          ...commonState,
          title: 'Resizable sticky note',
        }}
      >
        <p>Make me big!</p>
      </Window>
      <Window
        id="3"
        initialState={{
          ...commonState,
          isResizable: false,
          title: 'Sticky note',
        }}
      >
        <p>Can&apos;t close me!</p>
      </Window>
    </Wisp>
  );
};

export const ExternalWindowToggling = (): JSX.Element => {
  const [showWindow, setShowWindow] = useState<boolean>(false);
  return (
    <div>
      <button type="button" onClick={() => setShowWindow(!showWindow)}>
        Toggle window
      </button>
      <div style={{ width: '800px', height: '600px' }}>
        <Wisp>
          <Desktop>
            <VersionInfo />
          </Desktop>
          <Window id="1" initialState={{ title: 'Initially shown' }}>
            This window is initially shown
          </Window>
          {showWindow && (
            <Window id="2" initialState={{ title: 'Toggled window' }}>
              This window is toggled by the button above
            </Window>
          )}
          <Taskbar />
        </Wisp>
      </div>
    </div>
  );
};
