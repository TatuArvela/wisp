import { Checkbox } from '../../src/index';
import { argonParameters } from '../decorators/Argon';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

export default {
  component: Checkbox,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Checkbox',
    inlineLabel: false,
  },
  parameters: argonParameters('checked', 'onChange', false, 'toggle'),
};
