import { Meta, StoryObj } from "@storybook/react";
import ReviewCardSkeleton from "./ReviewCardSkeleton";
import { ReviewCardSkeletonProps } from "./ReviewCardSkeleton.types";

export default {
  title: "burneeble-website-components/common/ReviewCard/ReviewCardSkeleton",
  component: ReviewCardSkeleton,
} as Meta<typeof ReviewCardSkeleton>;

type Story = StoryObj<ReviewCardSkeletonProps>;

export const simpleReviewCardSkeleton: Story = {
  args: {},
};
