import { useState } from '@storybook/addons';
import React from 'react';

import { Divider } from '../../src';
import ListBox from '../../src/controls/ListBox';
import ControlStoryWrapper from './ControlStoryWrapper';

export default {
  component: ListBox,
  title: 'controls/ListBox',
};

const options = ['Banana', 'Strawberry', 'Blueberry', 'Orange'];
export const ListBoxStory = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <ControlStoryWrapper>
      <ListBox
        value={value}
        onChange={setValue}
        options={options}
        label="Smoothie:"
      />
      <Divider />
      <ListBox
        value={value}
        onChange={setValue}
        options={options}
        label="Smoothie:"
        inlineLabel
      />
    </ControlStoryWrapper>
  );
};
ListBoxStory.story = {
  name: 'ListBox',
};
