import { AddressBar, ControlStoryDecorator, statefulProps } from '../../src';

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
    children: 'Address:',
    value: 'https://www.google.com/',
  },
  parameters: statefulProps('value', 'onChange', 'https://www.google.com/'),
};
