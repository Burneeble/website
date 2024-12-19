"use client";

import ImageLayout from "../ImageLayout";
import { TextRightCenterShapeHorizontalRightProps } from "./TextRightCenterShapeHorizontalRight.types";
import { HorizontalShape, SectionInfo } from "../Common";

const TextRightCenterShapeHorizontalRight = (
  props: TextRightCenterShapeHorizontalRightProps
) => {
  return (
    <div
      className={`
        text-right-center-shape-horizontal-right section-layout tw-flex
        tw-items-center tw-justify-center cs-gap-between-content tw-flex-col

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" textAlignment="center" />
      <div
        className={`
          wrapper tw-relative tw-w-screen tw-aspect-[390/318]

          lg:tw-flex-1 lg:tw-aspect-auto lg:tw-h-screen

          md:tw-aspect-[744/530]
        `}
      >
        <HorizontalShape align={"right"} />
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-absolute
            tw-left-1/2 -tw-translate-x-1/2 tw-top-1/2 -tw-translate-y-1/2
            tw-w-[calc(100%-40px)] tw-aspect-[350/230]

            lg:tw-pt-0 lg:tw-left-0 lg:tw-h-[95%] lg:tw-translate-x-0
            lg:tw-w-auto lg:tw-justify-start

            md:tw-pt-[50px]
          `}
        >
          <ImageLayout {...props} />
        </div>
      </div>
    </div>
  );
};

export default TextRightCenterShapeHorizontalRight;
