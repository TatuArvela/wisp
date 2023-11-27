import { ControlStoryDecorator, statefulProps, TextInput } from '../../src';

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
  parameters: statefulProps('value', 'onChange', ''),
};
