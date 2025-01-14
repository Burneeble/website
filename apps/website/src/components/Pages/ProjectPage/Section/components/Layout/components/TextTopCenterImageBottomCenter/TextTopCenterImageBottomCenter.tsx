"use client";

import { TextTopCenterImageBottomCenterProps } from "./TextTopCenterImageBottomCenter.types";
import { BottomImagesWrapper, SectionInfo } from "../Common";

const TextTopCenterImageBottomCenter = (
  props: TextTopCenterImageBottomCenterProps
) => {
  return (
    <div
      className={`
        text-top-center-image-bottom-center section-layout tw-flex-col
        layout-structure
      `}
    >
      <SectionInfo {...props} textAlignment="center" />
      <BottomImagesWrapper {...props} />
    </div>
  );
};

export default TextTopCenterImageBottomCenter;
