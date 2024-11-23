import { StoryObj, Meta } from "@storybook/react";
import NotFound from "./NotFound";
import { NotFoundProps } from "./NotFound.types";

export default {
  title: "burneeble-website-components/common/NotFound",
  component: NotFound,
} as Meta<typeof NotFound>;

type Story = StoryObj<NotFoundProps>;

export const simpleNotFound: Story = {
  args: {
    title: "404",
    text: "The page you are looking for does not exist.",
  },
};
