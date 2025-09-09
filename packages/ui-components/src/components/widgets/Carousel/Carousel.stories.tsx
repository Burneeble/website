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
    cta: {
      children: "See All Projects",
      variant: "secondary",
      size: "default",
    },
  },
  render: (props) => {
    const projects = [
      {
        thumbnail: "https://picsum.photos/500",
        categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
        title: "Project",
        description:
          "The Greens NFT Club is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        projectUrl: "https://www.google.com",
      },
      {
        thumbnail: "https://picsum.photos/600",
        categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
        title: "Project",
        description:
          "The Greens NFT Club is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        projectUrl: "https://www.google.com",
      },
      {
        thumbnail: "https://picsum.photos/1920/1080",
        categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
        title: "Project",
        description:
          "The Greens NFT Club is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        projectUrl: "https://www.google.com",
      },
    ];

    return (
      <div className="tw-mx-auto tw-flex tw-h-[50rem] tw-w-[60rem] tw-justify-center">
        <Carousel
          labels={projects.map((proj) => {
            return proj.categories.length <= 3
              ? proj.categories
              : proj.categories.slice(0, 3);
          })}
          items={projects.map((proj, i) => {
            return (
              <>
                <p key={i}>{proj.title}</p>
              </>
            );
          })}
        ></Carousel>
      </div>
    );
  },
};
