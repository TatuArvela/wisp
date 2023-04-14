import React from 'react';

import { ScrollableContent, Window, Wisp } from '../../src';

export default {
  component: ScrollableContent,
  title: 'controls/ScrollableContent',
};

export const ScrollableContentStory = () => (
  <Wisp enableDefaultElements={false} enableWindowMinimize={false}>
    <Window
      id="1"
      initialState={{
        width: 400,
        height: 400,
      }}
    >
      <ScrollableContent vertical>
        <div
          style={{
            height: 500,
            width: 50,
            background: 'linear-gradient(180deg, red, purple)',
          }}
        ></div>
      </ScrollableContent>
    </Window>
    <Window
      id="2"
      initialState={{
        width: 400,
        height: 400,
      }}
    >
      <ScrollableContent horizontal>
        <div
          style={{
            height: 50,
            width: 500,
            background: 'linear-gradient(90deg, blue, green)',
          }}
        ></div>
      </ScrollableContent>
    </Window>
    <Window
      id="3"
      initialState={{
        width: 400,
        height: 400,
      }}
    >
      <ScrollableContent vertical horizontal>
        <div
          style={{
            height: 500,
            width: 500,
            background: 'linear-gradient(-45deg, yellow, orange)',
          }}
        ></div>
      </ScrollableContent>
    </Window>
  </Wisp>
);
ScrollableContentStory.story = {
  name: 'ScrollableContent',
};
