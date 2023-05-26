import TimeInput from '../../src/controls/TimeInput';
import Argon from '../decorators/Argon';
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
  decorators: [Argon('value', 'onChange', { minutes: 0, hours: 0 })],
};
