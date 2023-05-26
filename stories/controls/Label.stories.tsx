import { Label } from '../../src';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

export default {
  component: Label,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Label, label, label!',
  },
};
