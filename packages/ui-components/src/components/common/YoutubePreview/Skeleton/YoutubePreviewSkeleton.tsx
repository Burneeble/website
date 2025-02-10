"use client";

import React from "react";
import { YoutubePreviewSkeletonProps } from "./YoutubePreviewSkeleton.types";
import Skeleton from "react-loading-skeleton";

const YoutubePreviewSkeleton = (props: YoutubePreviewSkeletonProps) => {
  return (
    <div
      className={`youtube-preview-skeleton tw-flex tw-flex-col tw-gap-[10px]`}
    >
      <Skeleton
        className={`
          thumbnail-skeleton tw-aspect-[304/171] tw-w-full tw-rounded-t-md
        `}
      />
      <div className="titles tw-flex tw-flex-col tw-gap-[5px]">
        <Skeleton
          className={`
            title-skeleton tw-h-[25px]

            lg:tw-h-[30px]
          `}
        />
        <Skeleton
          className={`
            title-skeleton tw-h-[25px] tw-w-[65%]

            lg:tw-h-[30px]
          `}
        />
      </div>
    </div>
  );
};

export default YoutubePreviewSkeleton;
