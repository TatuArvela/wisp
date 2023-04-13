import React from 'react';

import { Label } from '../../src';
import ControlStoryWrapper from './ControlStoryWrapper';

export default {
  component: Label,
  title: 'controls/Label',
};

export const LabelStory = () => (
  <ControlStoryWrapper>
    <Label>Label, label, label!</Label>
  </ControlStoryWrapper>
);
LabelStory.story = {
  name: 'Label',
};
