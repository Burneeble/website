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
        text-right-center-image-left-center section-layout tw-flex
        tw-items-center tw-justify-center tw-flex-col-reverse
        cs-gap-between-content

        lg:tw-flex-row
      `}
    >
      <SideImagesWrapper {...props} side="left" />
      <SectionInfo {...props} textAlignment="center" alignment="right" />
    </div>
  );
};

export default TextRightCenterImageLeftCenter;
