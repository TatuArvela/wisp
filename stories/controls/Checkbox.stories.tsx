import { useState } from '@storybook/addons';
import React from 'react';

import { Checkbox, Divider } from '../../src/index';
import ControlStoryWrapper from './ControlStoryWrapper';

export default {
  component: Checkbox,
  title: 'controls/Checkbox',
};

export const CheckboxStory = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const toggleChecked = () => setChecked((prevState) => !prevState);

  return (
    <ControlStoryWrapper>
      <Checkbox checked={checked} onClick={toggleChecked} />
      <Divider />
      <Checkbox
        checked={checked}
        onClick={toggleChecked}
        inlineLabel
        label="Checkbox"
      />
      <Divider />
      <Checkbox checked={checked} onClick={toggleChecked} label="Checkbox" />
    </ControlStoryWrapper>
  );
};
CheckboxStory.story = {
  name: 'Checkbox',
};
