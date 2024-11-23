import { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./button";

export default {
  title: "burneeble-website-components/ui/Button",
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<ButtonProps>;

export const baseButton: Story = {
  args: {
    children: "Button",
  },
};
