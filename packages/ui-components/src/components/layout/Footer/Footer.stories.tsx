import { StoryObj, Meta } from "@storybook/react";
import Footer from "./Footer";
import { FooterProps } from "./Footer.types";
import React from "react";

export default {
  title: "burneeble-website-components/layout/Footer",
  component: Footer,
} as Meta<typeof Footer>;

type Story = StoryObj<FooterProps>;

export const simpleFooter: Story = {
  args: {
   
  },
};
