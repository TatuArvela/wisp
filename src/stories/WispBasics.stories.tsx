// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useState } from '@storybook/addons';
import React from 'react';

import AlertWindow from '../window/AlertWindow';
import Window from '../window/Window';
import Wisp from '../Wisp';

export default {
  component: Wisp,
  title: 'Wisp/Basics',
};

export const DesktopStory = (): JSX.Element => (
  <Wisp>
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
    <AlertWindow id="1" title="Uno">
      Alert!
    </AlertWindow>
    <AlertWindow id="2" title="Dos">
      Warning!
    </AlertWindow>
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
    <Wisp enableDefaultElements={false}>
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
          <Window id="1" initialState={{ title: 'Initially shown' }}>
            This window is initially shown
          </Window>
          {showWindow && (
            <Window id="2" initialState={{ title: 'Toggled window' }}>
              This window is toggled by the button above
            </Window>
          )}
        </Wisp>
      </div>
    </div>
  );
};
