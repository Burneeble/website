"use client";

import { TextRightCenterShapeVerticalLeftProps } from "./TextRightCenterShapeVerticalLeft.types";
import { SectionInfo, ShapeVertical2ImagesWrapper } from "../Common";

const TextRightCenterShapeVerticalLeft = (
  props: TextRightCenterShapeVerticalLeftProps
) => {
  return (
    <div
      className={`
        text-right-center-shape-vertical-left section-layout tw-flex
        tw-items-center tw-justify-center cs-gap-between-content
        tw-flex-col-reverse tw-relative

        lg:tw-flex-row
      `}
    >
      <ShapeVertical2ImagesWrapper {...props} side="left" />
      <SectionInfo {...props} alignment="right" textAlignment="center" />
    </div>
  );
};

export default TextRightCenterShapeVerticalLeft;
