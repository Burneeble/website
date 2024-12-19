"use client";

import { TextTopStartImageBottomCenterProps } from "./TextTopStartImageBottomCenter.types";
import { BottomImagesWrapper, SectionInfo } from "../Common";

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
      <BottomImagesWrapper {...props} />
    </div>
  );
};

export default TextTopStartImageBottomCenter;
