import { statefulProps, ComboBox, ControlStoryDecorator } from '../../src';

export default {
  component: ComboBox,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

const options = ['Banana', 'Strawberry', 'Blueberry', 'Orange'];
export const Default = {
  args: {
    options: options,
    label: 'Smoothie',
    inlineLabel: false,
  },
  parameters: statefulProps('value', 'onChange', undefined),
};
