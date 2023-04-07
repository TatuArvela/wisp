import { useState } from '@storybook/addons';
import React from 'react';

import { Checkbox } from '../../src/index';
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
    </ControlStoryWrapper>
  );
};
CheckboxStory.story = {
  name: 'Checkbox',
};
