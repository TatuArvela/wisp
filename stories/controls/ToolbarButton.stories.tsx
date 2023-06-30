import { ControlStoryDecorator, ToolbarButton } from '../../src';

export default {
  component: ToolbarButton,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Button',
  },
};
