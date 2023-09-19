import { statefulProps, Checkbox, ControlStoryDecorator } from '../../src';

export default {
  component: Checkbox,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Checkbox',
    inlineLabel: false,
  },
  parameters: statefulProps('checked', 'onChange', false, 'toggle'),
};
