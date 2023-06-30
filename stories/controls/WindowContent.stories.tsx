import { WindowContent } from '../../src';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

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
