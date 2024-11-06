import { StoryObj, Meta } from "@storybook/react";
import Navbar from "./Navbar";
import { NavbarProps } from "./Navbar.types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

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
    dropdowns: [
      {
        title: "Showcase",
        icon: faReact,
        primaryItem: {
          title: "shadcn/ui",
          href: "/",
          description:
            "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
          svg: <FontAwesomeIcon icon={faReact} className="tw-h-6 tw-w-6" />,
        },
        items: [
          {
            title: "Introduction",
            href: "/",
            description:
              "Re-usable components built using Radix UI and Tailwind CSS.",
          },
          {
            title: "Installation",
            href: "/",
            description: "How to install dependencies and structure your app.",
          },
          {
            title: "Typography",
            href: "/",
            description: "Styles for headings, paragraphs, lists...etc",
          },
        ],
      },
    ],
    links: [
      {
        title: "Blog",
        href: "/",
        icon: faReact,
      },
      {
        title: "About",
        href: "/",
        icon: faReact,
      },
    ],
  },
};
