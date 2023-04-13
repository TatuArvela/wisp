import { useState } from '@storybook/addons';
import React from 'react';

import { Divider } from '../../src';
import Textarea from '../../src/controls/Textarea';
import ControlStoryWrapper from './ControlStoryWrapper';

export default {
  component: Textarea,
  title: 'controls/Textarea',
};

export const TextareaStory = () => {
  const [value, setValue] = useState<string>('');

  return (
    <ControlStoryWrapper>
      <Textarea value={value} onChange={setValue} label="Feedback:" />
      <Divider />
      <Textarea
        value={value}
        onChange={setValue}
        label="Feedback:"
        inlineLabel
      />
    </ControlStoryWrapper>
  );
};
TextareaStory.story = {
  name: 'Textarea',
};
