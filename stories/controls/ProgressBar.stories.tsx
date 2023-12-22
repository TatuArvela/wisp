import { ControlStoryDecorator, ProgressBar } from '../../src';

export default {
  component: ProgressBar,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    max: undefined,
    value: undefined,
    disabled: undefined,
  },
};
