import { useState } from '@storybook/addons';
import React from 'react';

import { Checkbox, Window, Wisp } from '../../src/index';

export default {
  component: Wisp,
  title: 'controls/Checkbox',
};

export const CheckboxStory = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const toggleChecked = () => setChecked((prevState) => !prevState);

  return (
    <Wisp enableDefaultElements={false}>
      <Window id="1">
        <Checkbox checked={checked} onClick={toggleChecked} />
      </Window>
    </Wisp>
  );
};
CheckboxStory.story = {
  name: 'Checkbox',
};
