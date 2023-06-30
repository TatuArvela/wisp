import { ControlStoryDecorator, Label } from '../../src';

export default {
  component: Label,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Label, label, label!',
  },
};
