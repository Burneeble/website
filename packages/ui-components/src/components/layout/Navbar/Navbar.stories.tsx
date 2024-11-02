import { StoryObj, Meta } from "@storybook/react";
import Navbar from "./Navbar";
import { NavbarProps } from "./Navbar.types";
import React from "react";

export default {
  title: "burneeble-website-components/layout/Navbar",
  component: Navbar,
} as Meta<typeof Navbar>;

type Story = StoryObj<NavbarProps>;

export const simpleNavbar: Story = {
  args: {
    logo: {
      svg: <div>Logo</div>,
      url: "https://google.com",
    },
  },
};
