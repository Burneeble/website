"use client";

import { TextLeftStartFullImageRightCenterProps } from "./TextLeftStartFullImageRightCenter.types";
import { SectionInfo } from "../Common";
import SideFullImagesWrapper from "../Common/ImagesWrappers/SideFullImagesWrapper";

const TextLeftStartFullImageRightCenter = (
  props: TextLeftStartFullImageRightCenterProps
) => {
  return (
    <div
      className={`
        text-left-start-full-image-right-center section-layout tw-flex
        tw-items-center tw-justify-center cs-gap-between-content tw-flex-col

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} textAlignment="left" alignment="left" />
      <SideFullImagesWrapper {...props} side="right" />
    </div>
  );
};

export default TextLeftStartFullImageRightCenter;
