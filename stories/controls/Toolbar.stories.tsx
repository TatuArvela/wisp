import React from 'react';

import { icons, Toolbar, ToolbarButton } from '../../src/index';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

export default {
  component: Toolbar,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Button',
    children: (
      <>
        <ToolbarButton label="Action" />
        <ToolbarButton icon={icons.wisp} />
      </>
    ),
  },
};
