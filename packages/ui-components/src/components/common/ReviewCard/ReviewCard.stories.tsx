import { Meta, StoryObj } from "@storybook/react";
import ReviewCard from "./ReviewCard";
import { ReviewCardProps } from "./ReviewCard.types";
import React from "react";

export default {
  title: "burneeble-website-components/common/ReviewCard",
  component: ReviewCard,
} as Meta<typeof ReviewCard>;

type Story = StoryObj<ReviewCardProps>;

export const simpleReviewCard: Story = {
  args: {
    user: {
      name: "John Smith",
      country: "United States",
      avatar: "https://picsum.photos/58/58",
    },
    rating: 4.5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor, libero euismod luctus tincidunt, libero. lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor, libero euismod luctus tincidunt, libero liberoLorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};