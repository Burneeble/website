import { StoryObj, Meta } from "@storybook/react";
import ContactCard from "./ContactCard";
import { ContactCardProps } from "./ContactCard.types";
import React from "react";

export default {
  title: "burneeble-website-components/common/ContactCard",
  component: ContactCard,
} as Meta<typeof ContactCard>;

type Story = StoryObj<ContactCardProps>;

export const simpleContactCard: Story = {
  args: {
   
  },
};
