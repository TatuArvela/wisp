import React, { useState } from 'react';

import { Window, Wisp } from '../src/index';
import { useWindow } from '../src/window/WindowContext';

export default {
  title: 'Wisp/Advanced Usage',
  component: Wisp,
};

export const WispInWisp = {
  args: {
    children: (
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
    ),
  },
};

const commonState = {
  height: 200,
  isClosable: false,
  isMaximizable: false,
  isMinimizable: false,
  positionX: 100,
  positionY: 100,
  width: 200,
};
export const StickyNotes = {
  args: {
    enableDefaultElements: false,
    children: (
      <>
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
          <p>Can't close me!</p>
        </Window>
      </>
    ),
  },
};

export const ExternalWindowToggling = () => {
  const [showWindow, setShowWindow] = useState<boolean>(false);
  return (
    <div>
      <div style={{ padding: '10px' }}>
        <button type="button" onClick={() => setShowWindow(!showWindow)}>
          Toggle window
        </button>
      </div>
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

const ContextExampleComponent = () => {
  const window = useWindow();
  return (
    <table>
      <tbody>
        <tr>
          <td>width</td>
          <td>{window.width}</td>
        </tr>
        <tr>
          <td>height</td>
          <td>{window.height}</td>
        </tr>
        <tr>
          <td>x position</td>
          <td>{window.positionX}</td>
        </tr>
        <tr>
          <td>y position</td>
          <td>{window.positionY}</td>
        </tr>
      </tbody>
    </table>
  );
};
export const WindowContext = () => (
  <Wisp enableDefaultElements={false}>
    <Window
      id="1"
      initialState={{
        width: 230,
        height: 115,
        title: 'Window Context Example',
      }}
    >
      <ContextExampleComponent />
    </Window>
  </Wisp>
);
