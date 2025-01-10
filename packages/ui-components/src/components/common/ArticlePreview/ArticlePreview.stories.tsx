import { StoryObj, Meta } from "@storybook/react";
import ArticlePreview from "./ArticlePreview";
import { ArticlePreviewProps } from "./ArticlePreview.types";
import React, { useState } from "react";
import ArticlePreviewSkeleton from "./Skeleton/ArticlePreviewSkeleton";
import { Button } from "./../../ui";

export default {
  title: "burneeble-website-components/common/ArticlePreview",
  component: ArticlePreview,
} as Meta<typeof ArticlePreview>;

type Story = StoryObj<ArticlePreviewProps>;

export const simpleArticlePreview: Story = {
  args: {
    thumbnail: "https://picsum.photos/1920/1080",
    title: "Fighter Punks",
    category: "Blockchain",
    categorySlug: "blockchain",
    slug: "fighter-punks",
    description:
      "Do you want to install the new OpenDevin but are having trouble? Through this step-by-step guide and the related video, you will no longer have any doubts about how to do it. It’s easier tha",
  },

  render: (props) => {
    return <ArticlePreview {...props} />;
  },
};

export const darkArticlePreview: Story = {
  args: {
    thumbnail: "https://picsum.photos/1920/1080",
    title: "Fighter Punks",
    category: "Blockchain",
    categorySlug: "blockchain",
    slug: "fighter-punks",
    description:
      "Do you want to install the new OpenDevin but are having trouble? Through this step-by-step guide and the related video, you will no longer have any doubts about how to do it. It’s easier tha",
    variant: "dark",
  },

  render: (props) => {
    return <ArticlePreview {...props} />;
  },
};

export const articlePreviewWithSkeleton: Story = {
  args: {
    thumbnail: "https://picsum.photos/1920/1080",
    title: "Fighter Punks",
    category: "Blockchain",
    categorySlug: "blockchain",
    slug: "fighter-punks",
    description:
      "Do you want to install the new OpenDevin but are having trouble? Through this step-by-step guide and the related video, you will no longer have any doubts about how to do it. It’s easier tha",
    variant: "dark",
  },

  render: (props) => {
    //States
    const [isSkeleton, setIsSkeleton] = useState<boolean>(true);

    return (
      <div className="container tw-w-[15rem] tw-flex tw-flex-col tw-gap-4">
        <Button
          onClick={() => {
            if (isSkeleton) {
              setIsSkeleton(false);
            } else {
              setIsSkeleton(true);
            }
          }}
        >
          {isSkeleton ? "Article" : "Skeleton"}
        </Button>
        {isSkeleton ? (
          <ArticlePreviewSkeleton />
        ) : (
          <ArticlePreview {...props} />
        )}
      </div>
    );
  },
};
