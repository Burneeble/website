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
      <img
        src={props.thumbnail}
        className={`
          thumbnail tw-aspect-[421/258] tw-w-full tw-rounded-t-md tw-border
          tw-border-solid tw-border-[white] tw-transition-all tw-duration-200
          tw-ease-in-out

          group-hover:tw-border-active
        `}
      />
      <h4
        className={`
          title tw-font-inter tw-font-bold tw-transition-all tw-duration-200
          tw-ease-in-out

          group-hover:tw-text-action
        `}
      >
        {props.title}
      </h4>
    </div>
  );
};

export default YoutubePreview;
