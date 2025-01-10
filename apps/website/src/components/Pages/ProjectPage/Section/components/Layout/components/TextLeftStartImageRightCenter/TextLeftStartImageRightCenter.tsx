"use client";

import { TextLeftStartImageRightCenterProps } from "./TextLeftStartImageRightCenter.types";
import { SectionInfo } from "../Common";
import SideImagesWrapper from "../Common/ImagesWrappers/SideImagesWrapper";

const TextLeftStartImageRightCenter = (
  props: TextLeftStartImageRightCenterProps
) => {
  return (
    <div
      className={`
        text-left-start-image-right-center section-layout layout-structure
        tw-flex-col

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" textAlignment="left" />
      <SideImagesWrapper {...props} side="right" />
    </div>
  );
};

export default TextLeftStartImageRightCenter;
