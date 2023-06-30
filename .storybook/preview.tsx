import { Preview } from '@storybook/react';
import { ArgonDecorator } from '../src';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Wisp', ['Basics', 'Advanced Usage', 'Theming'], 'controls'],
      },
    },
  },
  decorators: [ArgonDecorator],
};

export default preview;
