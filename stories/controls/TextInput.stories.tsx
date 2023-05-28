import TextInput from '../../src/controls/TextInput';
import argon from '../decorators/Argon';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

export default {
  component: TextInput,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Feedback:',
    inlineLabel: false,
  },
  parameters: argon('value', 'onChange', ''),
};