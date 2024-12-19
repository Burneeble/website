"use client";

import ImageLayout from "../ImageLayout";
import { TextLeftStartImageRightCenterProps } from "./TextLeftStartImageRightCenter.types";
import { SectionInfo } from "../Common";

const TextLeftStartImageRightCenter = (
  props: TextLeftStartImageRightCenterProps
) => {
  return (
    <div
      className={`
        text-left-start-image-right-center section-layout tw-flex
        tw-items-center tw-justify-center tw-flex-col cs-gap-between-content

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" textAlignment="left" />
      <div
        className={`
          images tw-flex tw-items-center tw-justify-center tw-w-full
          tw-aspect-square tw-max-w-[454px]

          lg:tw-max-w-[630px] lg:tw-flex-1
        `}
      >
        <ImageLayout {...props} mainAxis="width" />
      </div>
    </div>
  );
};

export default TextLeftStartImageRightCenter;
