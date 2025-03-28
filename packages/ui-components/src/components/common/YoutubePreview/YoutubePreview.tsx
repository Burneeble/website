"use client";

import React from "react";
import { YoutubePreviewProps } from "./YoutubePreview.types";

const YoutubePreview = (props: YoutubePreviewProps) => {
  return (
    <div
      className={`
        youtube-preview tw-group tw-flex tw-cursor-pointer tw-flex-col
        tw-gap-[10px]
      `}
      onClick={() => {
        window.open(props.url);
      }}
    >
      <div className="tw-relative">
        <div
          className={`
            layer tw-absolute tw-inset-0 tw-bg-primary tw-opacity-0
            tw-transition-all tw-duration-200 tw-ease-in-out

            group-hover:tw-opacity-[10%]
          `}
        />
        <img
          src={props.thumbnail}
          className={`
            tw-bg-tertiary thumbnail tw-aspect-[304/171] tw-w-full
            tw-rounded-2xl tw-border tw-border-solid tw-border-neutral
            tw-object-cover tw-transition-all tw-duration-200 tw-ease-in-out

            group-hover:tw-border-tertiary
          `}
        />
      </div>
      <p
        className={`
          title p-smaller tw-font-inter tw-font-bold tw-text-headings
          tw-transition-all tw-duration-200 tw-ease-in-out

          group-hover:tw-underline
        `}
      >
        {props.title}
      </p>
    </div>
  );
};

export default YoutubePreview;
