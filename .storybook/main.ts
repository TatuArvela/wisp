import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.tsx'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  core: {
    disableTelemetry: true,
  },

  staticDirs: ['../stories/assets'],

  env: (config) => ({...config, STORYBOOK_PACKAGE_VERSION: process.env.npm_package_version! }),
};
export default config;
