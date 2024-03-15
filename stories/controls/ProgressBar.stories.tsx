import { ControlStoryDecorator, ProgressBar } from '../../src';

export default {
  component: ProgressBar,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    max: 100,
    value: 50,
    disabled: undefined,
    variant: 'block',
  },
};

export const Indeterminate = {
  args: {
    max: undefined,
    value: undefined,
    disabled: undefined,
  },
};
