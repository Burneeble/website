import React from "react";
import { ProjectPreviewSkeletonProps } from "./ProjectPreviewSkeleton.types";
import Skeleton from "react-loading-skeleton";
import { cn } from "@/lib/utils";

const ProjectPreviewSkeleton = (props: ProjectPreviewSkeletonProps) => {
  return (
    <div
      className={`
        review-card-skeleton tw-relative tw-h-[177.40px] tw-w-[325px]

        lg:tw-h-[259px] lg:tw-w-[412px]

        md:tw-h-[200px] md:tw-w-[325px]
      `}
    >
      <Skeleton className={`tw-block tw-h-full tw-w-full tw-rounded-lg`} />
      <div className={cn(`tw-absolute tw-left-0 tw-top-0`)}></div>
    </div>
  );
};

export default ProjectPreviewSkeleton;
