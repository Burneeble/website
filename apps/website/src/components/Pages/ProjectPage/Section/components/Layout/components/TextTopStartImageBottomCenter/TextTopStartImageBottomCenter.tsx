"use client";

import { TextTopStartImageBottomCenterProps } from "./TextTopStartImageBottomCenter.types";
import { BottomImagesWrapper, SectionInfo } from "../Common";

const TextTopStartImageBottomCenter = (
  props: TextTopStartImageBottomCenterProps
) => {
  return (
    <div
      className={`
        text-top-start-image-bottom-center section-layout layout-structure
        tw-flex-col
      `}
    >
      <SectionInfo {...props} textAlignment="left" />
      <BottomImagesWrapper {...props} />
    </div>
  );
};

export default TextTopStartImageBottomCenter;
