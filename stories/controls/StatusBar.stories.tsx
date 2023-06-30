import React from 'react';

import { ControlStoryDecorator, StatusBar, StatusBarSection } from '../../src';

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
