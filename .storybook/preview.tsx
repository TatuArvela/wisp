import { Preview } from "@storybook/react";
import { ArgonDecorator } from "../stories/decorators/Argon";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Wisp", ["Basics", "Advanced Usage", "Theming"], "controls"]
      }
    },
  },
  decorators: [ArgonDecorator]
};

export default preview;
