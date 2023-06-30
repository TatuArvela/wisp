import { ControlStoryDecorator, StatusBarSection } from '../../src/index';

export default {
  component: StatusBarSection,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Status bar',
  },
};
