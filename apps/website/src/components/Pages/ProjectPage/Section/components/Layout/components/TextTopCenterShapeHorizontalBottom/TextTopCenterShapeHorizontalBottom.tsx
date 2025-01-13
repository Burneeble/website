"use client";

import { TextTopCenterShapeHorizontalBottomProps } from "./TextTopCenterShapeHorizontalBottom.types";
import { SectionInfo, ShapeBottomImagesWrapper } from "../Common";

const TextTopCenterShapeHorizontalBottom = (
  props: TextTopCenterShapeHorizontalBottomProps
) => {
  return (
    <div
      className={`
        text-top-center-shape-horizontal-bottom section-layout tw-flex-col
        layout-structure
      `}
    >
      <SectionInfo {...props} textAlignment="center" />
      <ShapeBottomImagesWrapper {...props} />
    </div>
  );
};

export default TextTopCenterShapeHorizontalBottom;
