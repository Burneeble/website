"use client";

import { TextLeftCenterImageRightCenterProps } from "./TextLeftCenterImageRightCenter.types";
import { SectionInfo } from "../Common";
import SideImagesWrapper from "../Common/ImagesWrappers/SideImagesWrapper";

const TextLeftCenterImageRightCenter = (
  props: TextLeftCenterImageRightCenterProps
) => {
  return (
    <div
      className={`
        text-left-center-image-right-center section-layout tw-flex
        tw-items-center tw-justify-center tw-flex-col cs-gap-between-content

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" />
      <SideImagesWrapper {...props} side="right" />
    </div>
  );
};

export default TextLeftCenterImageRightCenter;
