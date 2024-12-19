"use client";

import ImageLayout from "../ImageLayout";
import { TextRightCenterFullImageLeftCenterProps } from "./TextRightCenterFullImageLeftCenter.types";
import { SectionInfo } from "../Common";

const TextRightCenterFullImageLeftCenter = (
  props: TextRightCenterFullImageLeftCenterProps
) => {
  return (
    <div
      className={`
        text-right-center-full-image-left-center section-layout tw-flex
        tw-items-center tw-justify-center tw-flex-col-reverse
        cs-gap-between-content

        lg:tw-flex-row
      `}
    >
      <div
        className={`
          wrapper tw-w-full tw-relative tw-aspect-square tw-max-w-[454px]

          lg:tw-h-full lg:tw-w-auto lg:tw-max-w-[630px] lg:tw-flex-1
        `}
      >
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-aspect-square
            tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-right-0 tw-w-full
            tw-max-w-[454px]

            lg:tw-w-[calc(100vw/2-20px)] lg:tw-max-w-[unset]
          `}
        >
          <ImageLayout {...props} mainAxis="width" />
        </div>
      </div>
      <SectionInfo {...props} textAlignment="center" alignment="right" />
    </div>
  );
};

export default TextRightCenterFullImageLeftCenter;
