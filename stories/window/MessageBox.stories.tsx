import React from 'react';

import { MessageBox, Wisp } from '../../src';
import { WindowStoryDecorator } from '../../src/storyDecorators/windowStory';

export default {
  component: MessageBox,
  decorators: [WindowStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: <div>MessageBox</div>,
    title: 'MessageBox',
  },
};
