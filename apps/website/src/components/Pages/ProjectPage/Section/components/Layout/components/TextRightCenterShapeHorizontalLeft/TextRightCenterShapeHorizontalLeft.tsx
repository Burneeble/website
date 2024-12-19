"use client";

import { TextRightCenterShapeHorizontalLeftProps } from "./TextRightCenterShapeHorizontalLeft.types";
import { SectionInfo, ShapeHorizontalImagesWrapper } from "../Common";

const TextRightCenterShapeHorizontalLeft = (
  props: TextRightCenterShapeHorizontalLeftProps
) => {
  return (
    <div
      className={`
        text-right-center-shape-horizontal-left section-layout tw-flex
        tw-items-center tw-justify-center cs-gap-between-content
        tw-flex-col-reverse

        lg:tw-flex-row
      `}
    >
      <ShapeHorizontalImagesWrapper {...props} side="left" />
      <SectionInfo {...props} alignment="left" textAlignment="center" />
    </div>
  );
};

export default TextRightCenterShapeHorizontalLeft;
