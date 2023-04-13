import React from 'react';

import { Fieldset } from '../../src';
import ControlStoryWrapper from './ControlStoryWrapper';

export default {
  component: Fieldset,
  title: 'controls/Fieldset',
};

export const FieldsetStory = () => (
  <ControlStoryWrapper>
    <Fieldset legend="Fieldset 1">
      <div>Foo</div>
    </Fieldset>
    <Fieldset legend="Fieldset 2">
      <div>Bar</div>
    </Fieldset>
  </ControlStoryWrapper>
);
FieldsetStory.story = {
  name: 'Fieldset',
};
