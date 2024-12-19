"use client";

import { TextRightCenterImageLeftCenterShapeVerticalLeftProps } from "./TextRightCenterImageLeftCenterShapeVerticalLeft.types";
import { SectionInfo, ShapeVerticalImagesWrapper } from "../Common";

const TextRightCenterImageLeftCenterShapeVerticalLeft = (
  props: TextRightCenterImageLeftCenterShapeVerticalLeftProps
) => {
  return (
    <div
      className={`
        text-left-start-image-right-center-shape-vertical-right section-layout
        tw-flex tw-items-center tw-justify-center tw-flex-col-reverse
        cs-gap-between-content

        lg:tw-flex-row
      `}
    >
      <ShapeVerticalImagesWrapper {...props} side="left" />
      <SectionInfo {...props} textAlignment="center" alignment="right" />
    </div>
  );
};

export default TextRightCenterImageLeftCenterShapeVerticalLeft;
