import React from "react";
import { ProjectPreviewSkeletonProps } from "./ProjectPreviewSkeleton.types";
import Skeleton from "react-loading-skeleton";

const ProjectPreviewSkeleton = (props: ProjectPreviewSkeletonProps) => {
  return (
    <div
      className={`
        project-preview-skeleton tw-flex tw-h-[279px] tw-w-[350px] tw-flex-col
        tw-items-start tw-gap-[10px] tw-rounded-lg tw-border tw-border-red-300
      `}
    >
      <Skeleton
        className={`
          tw-h-[199px] tw-w-[350px] tw-self-stretch tw-rounded-tl-lg
          tw-rounded-tr-lg
        `}
      />

      <div
        className={`
          tw-flex tw-h-[60px] tw-flex-col tw-items-start tw-justify-around
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
