"use client";

import { TextLeftCenterImageRightCenterShapeVerticalRightProps } from "./TextLeftCenterImageRightCenterShapeVerticalRight.types";
import { SectionInfo, ShapeVerticalImagesWrapper } from "../Common";

const TextLeftCenterImageRightCenterShapeVerticalRight = (
  props: TextLeftCenterImageRightCenterShapeVerticalRightProps
) => {
  return (
    <div
      className={`
        text-left-center-image-right-center-shape-vertical-right section-layout
        tw-flex tw-items-center tw-justify-center cs-gap-between-content
        tw-flex-col

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" />
      <ShapeVerticalImagesWrapper {...props} side="right" />
    </div>
  );
};

export default TextLeftCenterImageRightCenterShapeVerticalRight;
