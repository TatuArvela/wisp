import { Preview } from '@storybook/react';
import { statefulPropsDecorator, defaultTheme, storybookConfigContextDecorator } from '../src';
import testTheme from '../stories/testTheme/theme';

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
    statefulPropsDecorator,
  ],
};

export default preview;
