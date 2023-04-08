import { useState } from '@storybook/addons';
import React from 'react';

import TimeInput, { Time } from '../../src/controls/TimeInput';
import ControlStoryWrapper from './ControlStoryWrapper';

export default {
  component: TimeInput,
  title: 'controls/TimeInput',
};

export const TimeInputStory = () => {
  const [value, setValue] = useState<Time>({
    hours: 0,
    minutes: 0,
  });

  return (
    <ControlStoryWrapper>
      <TimeInput value={value} onChange={setValue} label="Time:" />
      <TimeInput value={value} onChange={setValue} label="Time:" inlineLabel />
    </ControlStoryWrapper>
  );
};
TimeInputStory.story = {
  name: 'TimeInput',
};
