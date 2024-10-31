import { StoryObj, Meta } from "@storybook/react";
import Rating from "./Rating";
import { RatingProps } from "./Rating.types";
import React from "react";

export default {
  title: "burneeble-website-components/common/ReviewCard/components/Rating",
  component: Rating,
} as Meta<typeof Rating>;

type Story = StoryObj<RatingProps>;

export const simpleRating: Story = {
  args: {},
};
