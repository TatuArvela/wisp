import React from 'react';

import { MessageBox } from '../../src';
import { WindowStoryDecorator } from '../../src';

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
