"use client";

import { TextRightCenterFullImageLeftCenterProps } from "./TextRightCenterFullImageLeftCenter.types";
import { SectionInfo } from "../Common";
import SideFullImagesWrapper from "../Common/ImagesWrappers/SideFullImagesWrapper";

const TextRightCenterFullImageLeftCenter = (
  props: TextRightCenterFullImageLeftCenterProps
) => {
  return (
    <div
      className={`
        text-right-center-full-image-left-center section-layout layout-structure
        tw-flex-col-reverse

        lg:tw-flex-row
      `}
    >
      <SideFullImagesWrapper {...props} side="left" />
      <SectionInfo {...props} textAlignment="center" alignment="right" />
    </div>
  );
};

export default TextRightCenterFullImageLeftCenter;
