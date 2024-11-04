import { StoryObj, Meta } from "@storybook/react";
import Carousel from "./Carousel";
import { CarouselProps } from "./Carousel.types";
import React from "react";

export default {
  title: "burneeble-website-components/widget/Carousel",
  component: Carousel,
} as Meta<typeof Carousel>;

type Story = StoryObj<CarouselProps>;

export const simpleCarousel: Story = {
  args: {},
  render: (props) => {
    return (
      <div className="tw-h-[50rem] tw-w-[60rem] tw-flex tw-justify-center tw-mx-auto">
        <Carousel {...props} />
      </div>
    );
  },
};
