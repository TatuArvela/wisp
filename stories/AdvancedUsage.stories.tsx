import React, { useState } from 'react';

import {
  AddressBar,
  icons,
  MenuBar,
  ProgressBar,
  ScrollableContent,
  StatusBar,
  StatusBarSection,
  Toolbar,
  ToolbarButton,
  Window,
  Wisp,
} from '../src/index';
import { useWindow } from '../src/window/WindowContext';

export default {
  title: 'Wisp/Advanced Usage',
  component: Wisp,
};

export const WispInWisp = {
  args: {
    children: (
      <Window id="1" title="Parent window" width={600} height={480}>
        <div
          style={{
            border: '1px solid black',
            boxSizing: 'border-box',
            height: '100%',
            width: '100%',
          }}
        >
          <Wisp>
            <Window id="2" title="Child window">
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
          {...commonState}
          isDraggable={false}
          isResizable={false}
          title="Static note"
        >
          <p>Immovable object</p>
        </Window>
        <Window id="2" {...commonState} title="Resizable sticky note">
          <p>Make me big!</p>
        </Window>
        <Window id="3" {...commonState} isResizable={false} title="Sticky note">
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
          <Window id="1" title="Initially shown">
            This window is initially shown
          </Window>
          {showWindow && (
            <Window id="2" title="Toggled window">
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
    <Window id="1" width={230} height={115} title="Window Context Example">
      <ContextExampleComponent />
    </Window>
  </Wisp>
);

export const ComplexWindow = () => {
  const [address, setAddress] = useState<string>();
  return (
    <Wisp>
      <Window
        id="1"
        width={400}
        height={300}
        minHeight={200}
        minWidth={200}
        title="Complex Window"
      >
        <MenuBar isThrobberAnimated></MenuBar>
        <Toolbar>
          <ToolbarButton label="Action" />
          <ToolbarButton icon={icons.wisp} />
        </Toolbar>
        <AddressBar value={address} onChange={setAddress}>
          Address:
        </AddressBar>

        <div style={{ flexGrow: 1, overflow: 'hidden' }}>
          <ScrollableContent horizontal vertical>
            <div
              style={{
                height: '400px',
                padding: '5px',
                borderLeft: '1px solid black',
              }}
            >
              Test
            </div>
          </ScrollableContent>
        </div>

        <StatusBar showResizeHandle>
          <StatusBarSection>Status bar</StatusBarSection>
          <StatusBarSection width="80px">
            <ProgressBar />
          </StatusBarSection>
        </StatusBar>
      </Window>
    </Wisp>
  );
};
