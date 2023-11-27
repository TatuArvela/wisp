import { ControlStoryDecorator, ListBox, statefulProps } from '../../src';

export default {
  component: ListBox,
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
