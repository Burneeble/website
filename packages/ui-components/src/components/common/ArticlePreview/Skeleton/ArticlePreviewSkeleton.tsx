import React from "react";
import { ArticlePreviewSkeletonProps } from "./ArticlePreviewSkeleton.types";
import Skeleton from "react-loading-skeleton";

const ArticlePreviewSkeleton = (props: ArticlePreviewSkeletonProps) => {
  return (
    <div
      className={`
        article-preview-skeleton tw-flex tw-w-full tw-flex-col tw-items-start
        tw-gap-[20px] tw-rounded-lg
      `}
    >
      <Skeleton
        className={`
          tw-aspect-[1920/1080] tw-w-full tw-self-stretch tw-rounded-b-none
          tw-rounded-t-lg
        `}
        containerClassName="!tw-w-full tw-aspect-[1920/1080]"
      />

      <div
        className={`
          tw-flex tw-h-[275px] tw-w-full tw-flex-col tw-items-start
          tw-justify-start tw-gap-[5px]
        `}
      >
        <Skeleton
          className={`
            tw-h-[34.2px] tw-w-[130px] tw-rounded-[9px] tw-font-inter tw-text-xl
            tw-font-black tw-leading-loose tw-text-headings
          `}
        />
        <Skeleton
          className={`
            tw-h-[40px] tw-w-[250px] tw-self-stretch tw-font-inter tw-text-lg
            tw-font-normal tw-leading-7 tw-text-headings
          `}
        />
        <div className="description tw-w-full">
          <Skeleton className={`tw-mb-[10px] tw-h-[20px] tw-w-full`} />
          <Skeleton className={`tw-mb-[10px] tw-h-[20px] tw-w-full`} />
          <Skeleton className={`tw-mb-[10px] tw-h-[20px] tw-w-full`} />
          <Skeleton className={`tw-h-[20px] tw-w-3/5`} />
        </div>
      </div>
    </div>
  );
};

export default ArticlePreviewSkeleton;
