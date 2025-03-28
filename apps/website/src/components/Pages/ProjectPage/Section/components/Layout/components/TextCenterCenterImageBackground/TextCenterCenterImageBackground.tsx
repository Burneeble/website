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
        text-top-center-full-image-bottom-center section-layout layout-structure
        tw-relative tw-h-screen tw-w-screen tw-flex-col
      `}
    >
      <SectionInfo {...props} />
      <div
        className={`
          images tw-absolute tw-left-1/2 tw-top-1/2 tw-z-[-1] tw-flex
          tw-h-screen tw-w-screen -tw-translate-x-1/2 -tw-translate-y-1/2
          tw-items-center tw-justify-center tw-overflow-hidden
        `}
      >
        <div
          className={`
            overlay tw-absolute tw-inset-y-0 tw-z-[3] tw-h-full tw-w-full
            tw-bg-[rgba(0,0,0,0.6)]
          `}
        />
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextCenterCenterImageBackground;
