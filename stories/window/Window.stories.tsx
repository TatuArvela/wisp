import React from 'react';

import { Window, Wisp } from '../../src';
import { WindowStoryDecorator } from '../../src/storyDecorators/windowStory';

export default {
  component: Window,
  decorators: [WindowStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: <div>Window</div>,
    title: 'Window',
  },
};
