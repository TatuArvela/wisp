import { useState } from '@storybook/addons';
import React from 'react';

import TextInput from '../../src/controls/TextInput';
import ControlStoryWrapper from './ControlStoryWrapper';

export default {
  component: TextInput,
  title: 'controls/TextInput',
};

export const TextInputStory = () => {
  const [value, setValue] = useState<string>('');

  return (
    <ControlStoryWrapper>
      <TextInput value={value} onChange={setValue} label="Feedback:" />
      <TextInput
        value={value}
        onChange={setValue}
        label="Feedback:"
        inlineLabel
      />
    </ControlStoryWrapper>
  );
};
TextInputStory.story = {
  name: 'TextInput',
};
