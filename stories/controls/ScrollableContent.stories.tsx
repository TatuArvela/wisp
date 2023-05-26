import React from 'react';

import { ScrollableContent } from '../../src';
import { buildControlStoryDecorator } from '../decorators/ControlStoryDecorator';

export default {
  component: ScrollableContent,
  decorators: [buildControlStoryDecorator({ width: 400, height: 400 })],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    horizontal: true,
    vertical: true,
    children: (
      <div
        style={{
          height: 500,
          width: 500,
          background: 'linear-gradient(-45deg, yellow, orange)',
        }}
      ></div>
    ),
  },
};

export const Horizontal = {
  args: {
    horizontal: true,
    children: (
      <div
        style={{
          height: 50,
          width: 500,
          background: 'linear-gradient(90deg, blue, green)',
        }}
      ></div>
    ),
  },
};

export const Vertical = {
  args: {
    vertical: true,
    children: (
      <div
        style={{
          height: 500,
          width: 50,
          background: 'linear-gradient(180deg, red, purple)',
        }}
      ></div>
    ),
  },
};
