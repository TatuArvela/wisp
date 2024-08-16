import { Decorator } from '@storybook/react';
import React from 'react';

import { Desktop } from '../elements';
import { Wisp } from '../Wisp';

export const WindowStoryDecorator: Decorator = (Story) => (
  <div style={{ height: '600px', width: '800px' }}>
    <Wisp enableDefaultElements={false}>
      <Desktop />
      <Story />
    </Wisp>
  </div>
);
