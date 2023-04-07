import { useState } from '@storybook/addons';
import React from 'react';

import ComboBox from '../../src/controls/ComboBox';
import ControlStoryWrapper from './ControlStoryWrapper';

export default {
  component: ComboBox,
  title: 'controls/ComboBox',
};

const options = ['Banana', 'Strawberry', 'Blueberry', 'Orange'];
export const ComboBoxStory = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <ControlStoryWrapper>
      <ComboBox
        value={value}
        onChange={setValue}
        options={options}
        label="Smoothie:"
      />
    </ControlStoryWrapper>
  );
};
ComboBoxStory.story = {
  name: 'ComboBox',
};
