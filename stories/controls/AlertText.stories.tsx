import { AlertText, ControlStoryDecorator } from '../../src';

export default {
  component: AlertText,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'AlertText',
  },
};
