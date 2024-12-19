"use client";

import ImageLayout from "../ImageLayout";
import { TextTopCenterFullImageBottomCenterProps } from "./TextTopCenterFullImageBottomCenter.types";
import { SectionInfo } from "../Common";

const TextTopCenterFullImageBottomCenter = (
  props: TextTopCenterFullImageBottomCenterProps
) => {
  return (
    <div
      className={`
        text-top-center-full-image-bottom-center section-layout tw-flex
        tw-flex-col tw-items-center tw-justify-center cs-gap-between-content
      `}
    >
      <SectionInfo {...props} textAlignment="center" />
      <div
        className={`
          images tw-w-full tw-flex tw-items-center tw-justify-center
          tw-h-[410px]

          md:tw-h-[600px]
        `}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextTopCenterFullImageBottomCenter;
