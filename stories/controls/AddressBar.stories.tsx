import { AddressBar, argon, ControlStoryDecorator } from '../../src';

export default {
  component: AddressBar,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    value: 'https://www.google.com/',
  },
  parameters: argon('value', 'onChange', ''),
};

export const WithLabel = {
  args: {
    children: 'Address:',
    value: 'https://www.google.com/',
  },
  parameters: argon('value', 'onChange', ''),
};
