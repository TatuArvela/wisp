import TimeInput from '../../src/controls/TimeInput';
import { argonParameters } from '../decorators/Argon';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

export default {
  component: TimeInput,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Time:',
    inlineLabel: false,
  },
  parameters: argonParameters('value', 'onChange', { minutes: 0, hours: 0 }),
};
