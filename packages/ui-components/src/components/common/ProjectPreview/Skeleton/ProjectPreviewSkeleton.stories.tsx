import { Meta, StoryObj } from "@storybook/react";
import ProjectPreviewSkeleton from "./ProjectPreviewSkeleton";
import { ProjectPreviewSkeletonProps } from "./ProjectPreviewSkeleton.types";

export default {
  title:
    "burneeble-website-components/common/ProjectPreview/ProjectPreviewSkeleton",
  component: ProjectPreviewSkeleton,
} as Meta<typeof ProjectPreviewSkeleton>;

type Story = StoryObj<ProjectPreviewSkeletonProps>;

export const simpleProjectPreviewSkeleton: Story = {
  args: {},
};
