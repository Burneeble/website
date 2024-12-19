"use client";

import ImageLayout from "../ImageLayout";
import { TextTopCenterImageBottomCenterProps } from "./TextTopCenterImageBottomCenter.types";
import { SectionInfo } from "../Common";

const TextTopCenterImageBottomCenter = (
  props: TextTopCenterImageBottomCenterProps
) => {
  return (
    <div
      className={`
        text-top-center-image-bottom-center section-layout tw-flex tw-flex-col
        tw-items-center tw-justify-center cs-gap-between-content
      `}
    >
      <SectionInfo {...props} textAlignment="center" />
      <div
        className={`
          images tw-w-full tw-flex tw-items-center tw-justify-center
          tw-h-[293px]

          md:tw-h-[480px]
        `}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextTopCenterImageBottomCenter;
