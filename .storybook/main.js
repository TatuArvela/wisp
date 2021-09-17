const { resolve } = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config) => {
    config.resolve.modules.push(resolve(__dirname, '../src'));
    return config;
  },
};
