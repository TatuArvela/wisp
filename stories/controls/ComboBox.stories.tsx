import ComboBox from '../../src/controls/ComboBox';
import { argonParameters } from '../decorators/Argon';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

export default {
  component: ComboBox,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

const options = ['Banana', 'Strawberry', 'Blueberry', 'Orange'];
export const Default = {
  args: {
    options: options,
    label: 'Smoothie',
    inlineLabel: false,
  },
  parameters: argonParameters('value', 'onChange', undefined),
};
