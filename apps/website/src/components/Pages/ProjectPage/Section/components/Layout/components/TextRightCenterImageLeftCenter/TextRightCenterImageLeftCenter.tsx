"use client";

import { TextRightCenterImageLeftCenterProps } from "./TextRightCenterImageLeftCenter.types";
import { SectionInfo } from "../Common";
import SideImagesWrapper from "../Common/ImagesWrappers/SideImagesWrapper";

const TextRightCenterImageLeftCenter = (
  props: TextRightCenterImageLeftCenterProps
) => {
  return (
    <div
      className={`
        text-right-center-image-left-center section-layout layout-structure
        tw-flex-col-reverse

        lg:tw-flex-row
      `}
    >
      <SideImagesWrapper {...props} side="left" />
      <SectionInfo {...props} textAlignment="center" alignment="right" />
    </div>
  );
};

export default TextRightCenterImageLeftCenter;
