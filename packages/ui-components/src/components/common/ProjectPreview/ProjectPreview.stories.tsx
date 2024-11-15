import { StoryObj, Meta } from "@storybook/react";
import ProjectPreview from "./ProjectPreview";
import { ProjectPreviewProps } from "./ProjectPreview.types";

export default {
  title: "burneeble-website-components/common/ProjectPreview",
  component: ProjectPreview,
} as Meta<typeof ProjectPreview>;

type Story = StoryObj<ProjectPreviewProps>;

export const simpleProjectPreview: Story = {
  args: {
    thumbnail: "https://picsum.photos/1920/1080",
    title: "Fighter Punks",
    categories: ["Blockchain", "Ethereum", "Website"],
  },
};
