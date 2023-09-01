import { Preview } from '@storybook/react';
import { ArgonDecorator, defaultTheme } from '../src';
import testTheme from '../stories/testTheme/theme';
import { storybookConfigContextDecorator } from '../src/storyDecorators/StorybookConfigContext';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Wisp', ['Basics', 'Advanced Usage', 'Theming'], 'controls'],
      },
    },
  },
  decorators: [
    storybookConfigContextDecorator({
      themes: [defaultTheme, testTheme],
    }),
    ArgonDecorator,
  ],
};

export default preview;
