"use client";

import { TextTopStartShapeHorizontalBottomProps } from "./TextTopStartShapeHorizontalBottom.types";
import { SectionInfo, ShapeBottomImagesWrapper } from "../Common";

const TextTopStartShapeHorizontalBottom = (
  props: TextTopStartShapeHorizontalBottomProps
) => {
  return (
    <div
      className={`
        text-top-start-shape-horizontal-bottom section-layout tw-flex
        tw-flex-col tw-items-center tw-justify-end cs-gap-between-content
      `}
    >
      <SectionInfo {...props} textAlignment="left" />
      <ShapeBottomImagesWrapper {...props} />
    </div>
  );
};

export default TextTopStartShapeHorizontalBottom;
