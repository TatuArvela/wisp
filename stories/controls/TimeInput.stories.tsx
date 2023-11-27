import { ControlStoryDecorator, statefulProps, TimeInput } from '../../src';

export default {
  component: TimeInput,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Time:',
    inlineLabel: false,
  },
  parameters: statefulProps('value', 'onChange', { minutes: 0, hours: 0 }),
};
