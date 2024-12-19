"use client";

import { TextTopCenterFullImageBottomCenterProps } from "./TextTopCenterFullImageBottomCenter.types";
import { FullBottomImagesWrapper, SectionInfo } from "../Common";

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
      <FullBottomImagesWrapper {...props} />
    </div>
  );
};

export default TextTopCenterFullImageBottomCenter;
