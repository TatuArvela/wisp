import { argon, Checkbox, ControlStoryDecorator } from '../../src';

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
  parameters: argon('checked', 'onChange', false, 'toggle'),
};
