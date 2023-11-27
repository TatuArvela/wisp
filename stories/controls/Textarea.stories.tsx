import { ControlStoryDecorator, statefulProps, Textarea } from '../../src';

export default {
  component: Textarea,
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
