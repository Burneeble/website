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
  args: {},
};
