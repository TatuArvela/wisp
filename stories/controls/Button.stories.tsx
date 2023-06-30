import { Button, ControlStoryDecorator } from '../../src';

export default {
  component: Button,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Button',
  },
};
