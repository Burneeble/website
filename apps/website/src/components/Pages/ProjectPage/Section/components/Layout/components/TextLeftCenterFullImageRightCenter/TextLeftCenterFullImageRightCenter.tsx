"use client";

import ImageLayout from "../ImageLayout";
import { TextLeftCenterFullImageRightCenterProps } from "./TextLeftCenterFullImageRightCenter.types";
import { SectionInfo } from "../Common";

const TextLeftCenterFullImageRightCenter = (
  props: TextLeftCenterFullImageRightCenterProps
) => {
  return (
    <div
      className={`
        text-left-center-full-image-right-center section-layout tw-flex
        tw-items-center tw-justify-center tw-flex-col cs-gap-between-content

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" />
      <div
        className={`
          wrapper tw-flex-1 tw-w-full tw-relative tw-aspect-square
          tw-max-w-[454px]

          lg:tw-h-full lg:tw-max-w-[630px] lg:tw-w-[630px]
        `}
      >
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-aspect-square
            tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-0 tw-w-full
            tw-max-w-[454px]

            lg:tw-w-[calc(100vw/2-20px)] lg:tw-max-w-[unset]
          `}
        >
          <ImageLayout {...props} mainAxis="width" />
        </div>
      </div>
    </div>
  );
};

export default TextLeftCenterFullImageRightCenter;
