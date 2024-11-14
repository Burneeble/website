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
    projects: [
      {
        thumbnail: "https://picsum.photos/500",
        categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
      },
      {
        thumbnail: "https://picsum.photos/600",
        categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
      },
      {
        thumbnail: "https://picsum.photos/1920/1080",
        categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
      },
      {
        thumbnail: "https://picsum.photos/800/900",
        categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
      },
      {
        thumbnail: "https://picsum.photos/100",
        categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
      },
      {
        thumbnail: "https://picsum.photos/500/325",
        categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
      },
    ],
    cta: {
      children: "See All Projects",
      variant: "secondary",
      size: "default",
    },
  },
  render: (props) => {
    return (
      <div className="tw-mx-auto tw-flex tw-h-[50rem] tw-w-[60rem] tw-justify-center">
        <Carousel {...props} />
      </div>
    );
  },
};
