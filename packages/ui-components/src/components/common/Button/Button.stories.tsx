import { StoryObj, Meta } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "burneeble-website-components/common/Button",
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<ButtonProps>;

export const primaryMedium: Story = {
  args: {
    text: "Button",
  },
};
