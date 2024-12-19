"use client";

import { SectionInfo } from "../Common";
import ImageLayout from "../ImageLayout";
import { TextTopStartFullImageBottomCenterProps } from "./TextTopStartFullImageBottomCenter.types";

const TextTopStartFullImageBottomCenter = (
  props: TextTopStartFullImageBottomCenterProps
) => {
  return (
    <div
      className={`
        text-top-start-full-image-bottom-center section-layout tw-flex
        tw-flex-col tw-items-center tw-justify-center cs-gap-between-content
      `}
    >
      <SectionInfo {...props} textAlignment="left" />
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

export default TextTopStartFullImageBottomCenter;
