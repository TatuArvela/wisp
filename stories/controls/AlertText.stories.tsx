import { AlertText } from '../../src/index';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

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
