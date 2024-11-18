import { StoryObj, Meta } from "@storybook/react";
import CTA from "./CTA";
import { CTAProps } from "./CTA.types";

export default {
  title: "burneeble-website-components/common/CTA",
  component: CTA,
} as Meta<typeof CTA>;

type Story = StoryObj<CTAProps>;

export const simpleCTA: Story = {
  args: {
    text: "View Project",
    projectUrl: "https://www.google.com",
    target: "_blank",
  },
};
