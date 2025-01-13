import { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";
import { SpinnerProps } from "./Spinner.types";

export default {
  title: "burneeble-website-components/common/Spinner",
  component: Spinner,
} as Meta<typeof Spinner>;

type Story = StoryObj<SpinnerProps>;

export const simpleSpinner: Story = {
  args: {},
};
