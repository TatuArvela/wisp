import { useState } from '@storybook/addons';

import { Window, Wisp } from '../src/index';

export default {
  component: Wisp,
  title: 'Wisp/Advanced Usage',
};

export const WispInWisp = (): JSX.Element => (
  <Wisp>
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
          <Window id="2" initialState={{ title: 'Child window' }}>
            Test
          </Window>
        </Wisp>
      </div>
    </Window>
  </Wisp>
);

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
