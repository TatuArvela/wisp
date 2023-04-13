import React from 'react';

import { Well } from '../../src';
import ControlStoryWrapper from './ControlStoryWrapper';

export default {
  component: Well,
  title: 'controls/Well',
};

export const WellStory = () => (
  <ControlStoryWrapper>
    <Well>
      <div>Well, well, well!</div>
    </Well>
  </ControlStoryWrapper>
);
WellStory.story = {
  name: 'Well',
};
