"use client";

import ImageLayout from "../ImageLayout";
import { TextTopStartImageBottomCenterProps } from "./TextTopStartImageBottomCenter.types";
import { SectionInfo } from "../Common";

const TextTopStartImageBottomCenter = (
  props: TextTopStartImageBottomCenterProps
) => {
  return (
    <div
      className={`
        text-top-start-image-bottom-center section-layout tw-flex tw-flex-col
        tw-items-center tw-justify-center cs-gap-between-content
      `}
    >
      <SectionInfo {...props} textAlignment="left" />
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

export default TextTopStartImageBottomCenter;
