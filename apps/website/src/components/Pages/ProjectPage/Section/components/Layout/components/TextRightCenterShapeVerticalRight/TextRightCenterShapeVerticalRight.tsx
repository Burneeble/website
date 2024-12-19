"use client";

import { TextRightCenterShapeVerticalRightProps } from "./TextRightCenterShapeVerticalRight.types";
import { SectionInfo, ShapeVertical2ImagesWrapper } from "../Common";

const TextRightCenterShapeVerticalRight = (
  props: TextRightCenterShapeVerticalRightProps
) => {
  return (
    <div
      className={`
        text-right-center-shape-vertical-right section-layout tw-flex
        tw-items-center tw-justify-center cs-gap-between-content tw-flex-col
        tw-relative

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" textAlignment="center" />
      <ShapeVertical2ImagesWrapper {...props} side="right" />
    </div>
  );
};

export default TextRightCenterShapeVerticalRight;
