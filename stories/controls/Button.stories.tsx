import React from 'react';

import { Button } from '../../src/index';
import ControlStoryWrapper from './ControlStoryWrapper';

export default {
  component: Button,
  title: 'controls/Button',
};

export const ButtonStory = () => (
  <ControlStoryWrapper>
    <Button>Button</Button>
  </ControlStoryWrapper>
);
ButtonStory.story = {
  name: 'Button',
};
