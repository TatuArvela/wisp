import React from 'react';

import { ControlStoryDecorator, Divider } from '../../src';

export default {
  component: Divider,
  decorators: [ControlStoryDecorator],
};

export const Horizontal = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div>A</div>
    <Divider />
    <div>B</div>
  </div>
);

export const Vertical = () => (
  <div
    style={{
      display: 'flex',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div>A</div>
    <Divider vertical />
    <div>B</div>
  </div>
);
