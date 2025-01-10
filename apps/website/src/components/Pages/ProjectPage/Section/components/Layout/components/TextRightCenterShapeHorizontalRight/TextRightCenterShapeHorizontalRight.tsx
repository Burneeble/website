"use client";

import { TextRightCenterShapeHorizontalRightProps } from "./TextRightCenterShapeHorizontalRight.types";
import { SectionInfo, ShapeHorizontalImagesWrapper } from "../Common";

const TextRightCenterShapeHorizontalRight = (
  props: TextRightCenterShapeHorizontalRightProps
) => {
  return (
    <div
      className={`
        text-right-center-shape-horizontal-right section-layout layout-structure tw-flex-col

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" textAlignment="center" />
      <ShapeHorizontalImagesWrapper {...props} side="right" />
    </div>
  );
};

export default TextRightCenterShapeHorizontalRight;
