"use client";

import { TextRightCenterShapeVerticalLeftProps } from "./TextRightCenterShapeVerticalLeft.types";
import { SectionInfo, ShapeVertical2ImagesWrapper } from "../Common";

const TextRightCenterShapeVerticalLeft = (
  props: TextRightCenterShapeVerticalLeftProps
) => {
  return (
    <div
      className={`
        text-right-center-shape-vertical-left section-layout layout-structure
        tw-relative tw-flex-col-reverse

        lg:tw-flex-row
      `}
    >
      <ShapeVertical2ImagesWrapper {...props} side="left" />
      <SectionInfo {...props} alignment="right" textAlignment="center" />
    </div>
  );
};

export default TextRightCenterShapeVerticalLeft;
