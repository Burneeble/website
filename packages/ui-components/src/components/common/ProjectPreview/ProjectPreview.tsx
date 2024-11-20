import React from "react";
import { ProjectPreviewProps } from "./ProjectPreview.types";

const ProjectPreview = (props: ProjectPreviewProps) => {
  return (
    <div
      className={`
        tw-group tw-inline-flex tw-w-full tw-cursor-pointer tw-flex-col
        tw-items-start tw-justify-start tw-gap-[10px] tw-rounded-lg
      `}
    >
      <div
        className={`
          image-wrapper tw-aspect-[1920/1080] tw-w-full tw-overflow-hidden
          tw-rounded-lg tw-border tw-border-[var(--neutral-default)]
        `}
      >
        <img
          className={`
            tw-aspect-[1920/1080] tw-w-full tw-self-stretch tw-transition-all
            tw-duration-200 tw-ease-in-out

            group-hover:tw-scale-[1.1]
          `}
          src={props.thumbnail}
        />
      </div>
      <div
        className={`
          project-info tw-flex tw-h-[60px] tw-max-w-full tw-flex-col
          tw-items-start tw-justify-center
        `}
      >
        <div
          className={`
            title tw-max-w-full tw-truncate tw-font-inter tw-text-xl
            tw-font-black tw-leading-loose tw-text-headings

            xl:tw-text-2xl
          `}
        >
          {props.title}
        </div>
        <div
          className={`
            categories tw-max-w-full tw-self-stretch tw-truncate tw-font-inter
            tw-text-lg tw-font-normal tw-leading-7 tw-text-headings

            xl:tw-text-xl
          `}
        >
          {props.categories.join(" - ")}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
