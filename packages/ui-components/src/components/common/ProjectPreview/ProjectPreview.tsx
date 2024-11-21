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
          tw-transition-all tw-duration-200 tw-ease-in-out

          group-hover:tw-border-tertiary
        `}
      >
        <img
          className={`
            tw-aspect-[1920/1080] tw-w-full tw-self-stretch tw-transition-all
            tw-duration-200 tw-ease-in-out

            group-hover:tw-scale-110
          `}
          src={props.thumbnail}
        />
      </div>
      <div
        className={`
          project-info tw-flex tw-max-w-full tw-flex-col tw-items-start
          tw-justify-center
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
            categories tw-flex tw-max-w-full tw-flex-wrap tw-gap-[5px]
            tw-self-stretch tw-font-inter tw-text-lg tw-font-normal tw-leading-7
            tw-text-body

            xl:tw-text-xl
          `}
        >
          {(props.categories.length > 5
            ? props.categories.slice(0, 5)
            : props.categories
          ).map((category, i) => {
            return (
              <span
                key={i}
                className={`
                  tw-rounded-lg tw-border tw-border-neutral category tw-px-[5px]
                  tw-font-inter tw-text-lg tw-font-normal tw-leading-[30px]
                  tw-text-body

                  xl:tw-text-xl
                `}
              >
                {category}
              </span>
            );
          })}
          {props.categories.length > 5 && <span>and others.</span>}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
