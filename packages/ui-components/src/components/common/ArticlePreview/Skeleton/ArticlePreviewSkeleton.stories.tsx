import { Meta, StoryObj } from "@storybook/react";
import ArticlePreviewSkeleton from "./ArticlePreviewSkeleton";
import { ArticlePreviewSkeletonProps } from "./ArticlePreviewSkeleton.types";

export default {
  title:
    "burneeble-website-components/common/ArticlePreview/ArticlePreviewSkeleton",
  component: ArticlePreviewSkeleton,
} as Meta<typeof ArticlePreviewSkeleton>;

type Story = StoryObj<ArticlePreviewSkeletonProps>;

export const simpleArticlePreviewSkeleton: Story = {
  args: {},
};
