import React from "react";
import { ProjectPreviewSkeletonProps } from "./ProjectPreviewSkeleton.types";
import Skeleton from "react-loading-skeleton";

const ProjectPreviewSkeleton = (props: ProjectPreviewSkeletonProps) => {
  return (
    <div
      className={`
        project-preview-skeleton tw-flex tw-w-full tw-flex-col tw-items-start
        tw-gap-[10px] tw-rounded-lg
      `}
    >
      <Skeleton
        className={`
          tw-aspect-[1920/1080] tw-w-full tw-self-stretch tw-rounded-lg
          tw-rounded-tl-lg
        `}
        containerClassName="!tw-w-full tw-aspect-[1920/1080]"
      />

      <div
        className={`
          tw-flex tw-h-[146px] tw-flex-col tw-items-start tw-justify-start
          tw-gap-[5px]
        `}
      >
        <Skeleton
          className={`
            tw-h-[30px] tw-w-[200px] tw-font-inter tw-text-xl tw-font-black
            tw-leading-loose tw-text-headings
          `}
        />
        <Skeleton
          className={`
            tw-h-[25px] tw-w-[350px] tw-self-stretch tw-font-inter tw-text-lg
            tw-font-normal tw-leading-7 tw-text-headings
          `}
        />
      </div>
    </div>
  );
};

export default ProjectPreviewSkeleton;
