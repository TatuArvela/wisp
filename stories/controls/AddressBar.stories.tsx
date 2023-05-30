import { AddressBar } from '../../src/index';
import argon from '../decorators/Argon';
import ControlStoryDecorator from '../decorators/ControlStoryDecorator';

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
