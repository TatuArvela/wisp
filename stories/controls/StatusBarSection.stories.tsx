import { StatusBarSection } from '../../src/index';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

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
