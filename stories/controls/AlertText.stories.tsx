import { ControlStoryDecorator, MessageBoxText } from '../../src';

export default {
  component: MessageBoxText,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'AlertText',
  },
};
