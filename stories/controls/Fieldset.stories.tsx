import React from 'react';

import { Fieldset } from '../../src';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

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
