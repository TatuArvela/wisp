import React from 'react';

import { MenuBar } from '../../src/index';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

export default {
  component: MenuBar,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: (
      <>
        <div
          style={{
            height: '100%',
            display: 'flex',
            padding: '0px 4px',
            alignItems: 'center',
          }}
        >
          Example
        </div>
      </>
    ),
    isThrobberAnimated: true,
  },
};
