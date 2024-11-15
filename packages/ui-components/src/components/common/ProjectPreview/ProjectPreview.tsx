import React from "react";
import { ProjectPreviewProps } from "./ProjectPreview.types";

const ProjectPreview = (props: ProjectPreviewProps) => {
  return (
    <div
      className={`
        tw-inline-flex tw-w-full tw-flex-col tw-items-start tw-justify-start
        tw-gap-[10px] tw-rounded-lg
      `}
    >
      <img
        className={`
          tw-aspect-[1920/1080] tw-w-full tw-self-stretch tw-rounded-tl-lg
          tw-rounded-tr-lg tw-border tw-border-[var(--neutral-default)]
        `}
        src={props.thumbnail}
      />

      <div
        className={`
          tw-flex tw-h-[60px] tw-flex-col tw-items-start tw-justify-center
        `}
      >
        <div
          className={`
            tw-font-inter tw-text-xl tw-font-black tw-leading-loose
            tw-text-headings

            xl:tw-text-2xl
          `}
        >
          {props.title}
        </div>
        <div
          className={`
            tw-self-stretch tw-font-inter tw-text-lg tw-font-normal tw-leading-7
            tw-text-headings

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
