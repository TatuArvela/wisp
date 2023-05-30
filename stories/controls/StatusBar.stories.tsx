import React from 'react';

import { StatusBar, StatusBarSection } from '../../src/index';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

export default {
  component: StatusBar,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: (
      <>
        <StatusBarSection>Status bar</StatusBarSection>
        <StatusBarSection>Yes</StatusBarSection>
      </>
    ),
  },
};

export const WithResizeHandle = {
  args: {
    children: <StatusBarSection>Status bar</StatusBarSection>,
    showResizeHandle: true,
  },
};
