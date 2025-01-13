import { StoryObj, Meta } from "@storybook/react";
import ContactCard from "./ContactCard";
import { ContactCardProps } from "./ContactCard.types";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "burneeble-website-components/common/ContactCard",
  component: ContactCard,
} as Meta<typeof ContactCard>;

type Story = StoryObj<ContactCardProps>;

export const simpleContactCard: Story = {
  args: {
    icon: faEnvelope,
    title: "Email",
    description:
      "You can contact us by email, we will reply you as soon as possible.",
    mainColor: "#f28307",
    buttonText: "Contact Us",
  },
};
