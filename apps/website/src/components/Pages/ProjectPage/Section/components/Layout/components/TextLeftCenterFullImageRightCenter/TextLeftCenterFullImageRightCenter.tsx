"use client";

import { TextLeftCenterFullImageRightCenterProps } from "./TextLeftCenterFullImageRightCenter.types";
import { SectionInfo } from "../Common";
import SideFullImagesWrapper from "../Common/ImagesWrappers/SideFullImagesWrapper";

const TextLeftCenterFullImageRightCenter = (
  props: TextLeftCenterFullImageRightCenterProps
) => {
  return (
    <div
      className={`
        text-left-center-full-image-right-center section-layout layout-structure
        tw-flex-col

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" />
      <SideFullImagesWrapper {...props} side="right" />
    </div>
  );
};

export default TextLeftCenterFullImageRightCenter;
