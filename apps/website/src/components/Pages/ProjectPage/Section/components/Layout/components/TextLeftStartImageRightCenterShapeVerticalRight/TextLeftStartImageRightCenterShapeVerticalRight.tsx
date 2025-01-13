"use client";

import { TextLeftStartImageRightCenterShapeVerticalRightProps } from "./TextLeftStartImageRightCenterShapeVerticalRight.types";
import { SectionInfo, ShapeVerticalImagesWrapper } from "../Common";

const TextLeftStartImageRightCenterShapeVerticalRight = (
  props: TextLeftStartImageRightCenterShapeVerticalRightProps
) => {
  return (
    <div
      className={`
        text-left-start-image-right-center-shape-vertical-right section-layout
        layout-structure tw-flex-col

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" textAlignment="left" />
      <ShapeVerticalImagesWrapper {...props} side="right" />
    </div>
  );
};

export default TextLeftStartImageRightCenterShapeVerticalRight;
