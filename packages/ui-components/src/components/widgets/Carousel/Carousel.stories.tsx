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
  args: {
    images: [
      "https://picsum.photos/500",
      "https://picsum.photos/600",
      "https://picsum.photos/1920/1080",
      "https://picsum.photos/800/900",
      "https://picsum.photos/100",
      "https://picsum.photos/500/325",
    ],
  },
  render: (props) => {
    return (
      <div className="tw-h-[50rem] tw-w-[60rem] tw-flex tw-justify-center tw-mx-auto">
        <Carousel {...props} />
      </div>
    );
  },
};
