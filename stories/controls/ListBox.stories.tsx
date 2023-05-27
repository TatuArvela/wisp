import ListBox from '../../src/controls/ListBox';
import { argonParameters } from '../decorators/Argon';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

export default {
  component: ListBox,
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
