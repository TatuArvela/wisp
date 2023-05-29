import ToolbarButton from '../../src/controls/ToolbarButton';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

export default {
  component: ToolbarButton,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Button',
  },
};
