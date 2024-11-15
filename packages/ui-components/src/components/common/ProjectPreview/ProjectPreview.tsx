import React from "react";
import { ProjectPreviewProps } from "./ProjectPreview.types";

const ProjectPreview = (props: ProjectPreviewProps) => {
  return (
    <div
      className={`
        tw-inline-flex tw-h-[279px] tw-w-[350px] tw-flex-col tw-items-start
        tw-justify-start tw-gap-[10px] tw-rounded-lg
      `}
    >
      <img
        className={`
          tw-h-[199px] tw-w-full tw-self-stretch tw-rounded-tl-lg
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
          `}
        >
          {props.title}
        </div>
        <div
          className={`
            tw-self-stretch tw-font-inter tw-text-lg tw-font-normal tw-leading-7
            tw-text-headings
          `}
        >
          {props.categories.join(" - ")}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
