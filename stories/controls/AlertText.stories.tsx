import React from 'react';

import { AlertText } from '../../src/index';
import ControlStoryWrapper from './ControlStoryWrapper';

export default {
  component: AlertText,
  title: 'controls/AlertText',
};

export const AlertTextStory = () => (
  <ControlStoryWrapper>
    <AlertText>AlertText</AlertText>
  </ControlStoryWrapper>
);
AlertTextStory.story = {
  name: 'AlertText',
};
