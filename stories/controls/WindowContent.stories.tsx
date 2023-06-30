import { ControlStoryDecorator, WindowContent } from '../../src';

export default {
  component: WindowContent,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Content, content, content!',
  },
};
