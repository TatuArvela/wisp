import React from 'react';

import { ControlStoryDecorator, Toolbar, ToolbarButton } from '../../src';

export default {
  component: Toolbar,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: (
      <>
        <ToolbarButton label="Action" />
        <ToolbarButton icon="wisp" />
      </>
    ),
  },
};
