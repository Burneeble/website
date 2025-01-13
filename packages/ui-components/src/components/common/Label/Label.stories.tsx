import { StoryObj, Meta } from "@storybook/react";
import Label from "./Label";
import { LabelProps } from "./Label.types";

export default {
  title: "burneeble-website-components/common/Label",
  component: Label,
} as Meta<typeof Label>;

type Story = StoryObj<LabelProps>;

export const simpleLabel: Story = {
  args: {
    text: "Label",
  },
};
