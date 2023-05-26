import { StatusBar } from '../../src/index';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

export default {
  component: StatusBar,
  decorators: [ControlStoryDecorator],
};

export const Default = {
  args: {
    children: 'Status bar',
  },
};

export const WithResizeHandle = {
  args: {
    children: 'Status bar',
    showResizeHandle: true,
  },
};
