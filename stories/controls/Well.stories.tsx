import React from 'react';

import { ControlStoryDecorator, Well } from '../../src';

export default {
  component: Well,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: <div>Well, well, well!</div>,
  },
};
