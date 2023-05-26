import { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Wisp", ["Basics", "Advanced Usage", "Theming"], "controls"]
      }
    },
  },
};

export default preview;
