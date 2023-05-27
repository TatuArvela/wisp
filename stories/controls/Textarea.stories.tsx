import Textarea from '../../src/controls/Textarea';
import { argonParameters } from '../decorators/Argon';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

export default {
  component: Textarea,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Feedback:',
    inlineLabel: false,
  },
  parameters: argonParameters('value', 'onChange', ''),
};
