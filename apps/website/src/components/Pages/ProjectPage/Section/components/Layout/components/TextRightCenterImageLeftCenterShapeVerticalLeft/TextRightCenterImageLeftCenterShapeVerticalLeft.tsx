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
        layout-structure tw-flex-col-reverse

        lg:tw-flex-row
      `}
    >
      <ShapeVerticalImagesWrapper {...props} side="left" />
      <SectionInfo {...props} textAlignment="center" alignment="right" />
    </div>
  );
};

export default TextRightCenterImageLeftCenterShapeVerticalLeft;
