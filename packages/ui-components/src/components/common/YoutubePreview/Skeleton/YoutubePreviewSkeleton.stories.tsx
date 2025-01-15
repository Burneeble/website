import { Meta, StoryObj } from "@storybook/react";
import YoutubePreviewSkeleton from "./YoutubePreviewSkeleton";
import { YoutubePreviewSkeletonProps } from "./YoutubePreviewSkeleton.types";

export default {
  title:
    "burneeble-website-components/common/YoutubePreview/YoutubePreviewSkeleton",
  component: YoutubePreviewSkeleton,
} as Meta<typeof YoutubePreviewSkeleton>;

type Story = StoryObj<YoutubePreviewSkeletonProps>;

export const simpleYoutubePreviewSkeleton: Story = {
  args: {},
};
