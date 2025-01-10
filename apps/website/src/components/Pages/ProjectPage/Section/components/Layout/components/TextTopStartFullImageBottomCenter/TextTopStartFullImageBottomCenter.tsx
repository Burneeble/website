"use client";

import { FullBottomImagesWrapper, SectionInfo } from "../Common";
import { TextTopStartFullImageBottomCenterProps } from "./TextTopStartFullImageBottomCenter.types";

const TextTopStartFullImageBottomCenter = (
  props: TextTopStartFullImageBottomCenterProps
) => {
  return (
    <div
      className={`
        text-top-start-full-image-bottom-center section-layout tw-flex-col
        layout-structure
      `}
    >
      <SectionInfo {...props} textAlignment="left" />
      <FullBottomImagesWrapper {...props} />
    </div>
  );
};

export default TextTopStartFullImageBottomCenter;
