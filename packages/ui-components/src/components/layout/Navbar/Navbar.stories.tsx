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
        title: "Getting Started",
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
      {
        title: "Components",
        items: [
          {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description:
              "A modal dialog that interrupts the user with important content and expects a response.",
          },
          {
            title: "Hover Card",
            href: "/docs/primitives/hover-card",
            description:
              "For sighted users to preview content available behind a link.",
          },
          {
            title: "Progress",
            href: "/docs/primitives/progress",
            description:
              "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
          },
          {
            title: "Scroll-area",
            href: "/docs/primitives/scroll-area",
            description: "Visually or semantically separates content.",
          },
          {
            title: "Tabs",
            href: "/docs/primitives/tabs",
            description:
              "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
          },
          {
            title: "Tooltip",
            href: "/docs/primitives/tooltip",
            description:
              "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
          },
        ],
      },
    ],
    links: [
      {
        title: "Documentation",
        href: "/",
      },
    ],
  },
};
