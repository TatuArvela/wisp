import React from 'react';

import { Well } from '../../src';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

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
