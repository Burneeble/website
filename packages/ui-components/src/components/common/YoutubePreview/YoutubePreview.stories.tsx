import { StoryObj, Meta } from "@storybook/react";
import YoutubePreview from "./YoutubePreview";
import { YoutubePreviewProps } from "./YoutubePreview.types";
import React from "react";

export default {
  title: "burneeble-website-components/common/YoutubePreview",
  component: YoutubePreview,
} as Meta<typeof YoutubePreview>;

type Story = StoryObj<YoutubePreviewProps>;

export const simpleYoutubePreview: Story = {
  args: {
    thumbnail: "https://picsum.photos/1920/1080",
    title: "Fighter Punks",
  },

  render: (props) => {
    return <YoutubePreview {...props} />;
  },
};
