"use client";

import { TextRightStartShapeVerticalRightProps } from "./TextRightStartShapeVerticalRight.types";
import { SectionInfo, ShapeVertical2ImagesWrapper } from "../Common";

const TextRightStartShapeVerticalRight = (
  props: TextRightStartShapeVerticalRightProps
) => {
  return (
    <div
      className={`
        text-right-start-shape-vertical-right section-layout layout-structure
        tw-flex-col tw-relative

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" textAlignment="left" />
      <ShapeVertical2ImagesWrapper {...props} side="right" />
    </div>
  );
};

export default TextRightStartShapeVerticalRight;
