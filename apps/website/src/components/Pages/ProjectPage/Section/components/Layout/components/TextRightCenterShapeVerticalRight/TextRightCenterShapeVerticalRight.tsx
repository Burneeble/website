"use client";

import { TextRightCenterShapeVerticalRightProps } from "./TextRightCenterShapeVerticalRight.types";
import { SectionInfo, ShapeVertical2ImagesWrapper } from "../Common";

const TextRightCenterShapeVerticalRight = (
  props: TextRightCenterShapeVerticalRightProps
) => {
  return (
    <div
      className={`
        text-right-center-shape-vertical-right section-layout layout-structure
        tw-relative tw-flex-col

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" textAlignment="center" />
      <ShapeVertical2ImagesWrapper {...props} side="right" />
    </div>
  );
};

export default TextRightCenterShapeVerticalRight;
