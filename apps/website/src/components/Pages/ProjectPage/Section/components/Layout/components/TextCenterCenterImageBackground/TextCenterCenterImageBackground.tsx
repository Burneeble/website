"use client";

import ImageLayout from "../ImageLayout";
import { TextCenterCenterImageBackgroundProps } from "./TextCenterCenterImageBackground.types";
import { SectionInfo } from "../Common";

const TextCenterCenterImageBackground = (
  props: TextCenterCenterImageBackgroundProps
) => {
  return (
    <div
      className={`
        text-top-center-full-image-bottom-center section-layout tw-flex
        tw-flex-col tw-items-center tw-justify-center tw-relative tw-w-screen
        tw-h-screen cs-gap-between-content
      `}
    >
      <SectionInfo {...props} />
      <div
        className={`
          images tw-w-screen tw-h-screen tw-flex tw-items-center
          tw-justify-center tw-z-[-1] tw-absolute tw-top-1/2 tw-left-1/2
          -tw-translate-x-1/2 -tw-translate-y-1/2 tw relative tw-overflow-hidden
        `}
      >
        <div
          className={`
            overlay tw-absolute tw-top-0 tw-bottom-0 tw-bg-[rgba(0,0,0,0.6)]
            tw-w-full tw-h-full tw-z-[3]
          `}
        />
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextCenterCenterImageBackground;
