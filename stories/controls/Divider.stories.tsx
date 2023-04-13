import React from 'react';

import { Divider, Window, Wisp } from '../../src';

export default {
  component: Divider,
  title: 'controls/Divider',
};

export const DividerStory = () => {
  return (
    <Wisp enableDefaultElements={false} enableWindowMinimize={false}>
      <Window
        id="1"
        initialState={{
          width: 300,
          height: 160,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>A</div>
          <Divider vertical />
          <div>B</div>
        </div>
      </Window>
      <Window
        id="2"
        initialState={{
          width: 300,
          height: 160,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>A</div>
          <Divider />
          <div>B</div>
        </div>
      </Window>
    </Wisp>
  );
};
DividerStory.story = {
  name: 'Divider',
};
