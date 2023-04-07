import React from 'react';

import { StatusBar } from '../../src/index';
import ControlStoryWrapper from './ControlStoryWrapper';

export default {
  component: StatusBar,
  title: 'controls/StatusBar',
};

export const StatusBarStory = () => (
  <ControlStoryWrapper>
    <StatusBar>Status bar</StatusBar>
  </ControlStoryWrapper>
);
StatusBarStory.story = {
  name: 'StatusBar',
};

export const WithResizeHandle = () => (
  <ControlStoryWrapper>
    <StatusBar showResizeHandle>Status bar</StatusBar>
  </ControlStoryWrapper>
);
WithResizeHandle.story = {
  name: 'StatusBar with resize handle',
};
