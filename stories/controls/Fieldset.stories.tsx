import React from 'react';

import { ControlStoryDecorator, Fieldset } from '../../src';

export default {
  component: Fieldset,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    legend: 'Fieldset 1',
    children: <div>Foo</div>,
  },
};
