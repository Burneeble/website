import { StoryObj, Meta } from "@storybook/react";
import Bars from "./Bars";
import { BarsProps } from "./Bars.types";

export default {
  title: "burneeble-website-components/common/Bars",
  component: Bars,
} as Meta<typeof Bars>;

type Story = StoryObj<BarsProps>;

export const simpleBars: Story = {};
