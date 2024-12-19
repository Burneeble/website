"use client";

import { TextRightStartShapeHorizontalRightProps } from "./TextRightStartShapeHorizontalRight.types";
import { SectionInfo, ShapeHorizontalImagesWrapper } from "../Common";

const TextRightStartShapeHorizontalRight = (
  props: TextRightStartShapeHorizontalRightProps
) => {
  return (
    <div
      className={`
        text-right-center-shape-horizontal-right section-layout tw-flex
        tw-items-center tw-justify-center cs-gap-between-content tw-flex-col

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" textAlignment="left" />
      <ShapeHorizontalImagesWrapper {...props} side="right" />
    </div>
  );
};

export default TextRightStartShapeHorizontalRight;
