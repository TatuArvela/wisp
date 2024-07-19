import { AddressBar, ControlStoryDecorator, statefulProps } from '../../src';
import icons from '../../src/themes/default/icons';

export default {
  component: AddressBar,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    value: 'https://www.google.com/',
  },
  parameters: statefulProps('value', 'onChange', 'https://www.google.com/'),
};

export const WithLabel = {
  args: {
    label: 'Address:',
    icon: icons.wisp,
    value: 'https://www.google.com/',
  },
  parameters: statefulProps('value', 'onChange', 'https://www.google.com/'),
};
