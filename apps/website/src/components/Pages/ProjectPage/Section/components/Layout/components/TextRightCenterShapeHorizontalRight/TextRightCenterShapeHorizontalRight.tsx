"use client";

import ImageLayout from "../ImageLayout";
import { TextRightCenterShapeHorizontalRightProps } from "./TextRightCenterShapeHorizontalRight.types";
import { SectionInfo } from "../Common";

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
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-top-0 tw-h-full tw-right-0 tw-z-[-1]
            tw-w-1/2

            lg:tw-right-[unset] lg:tw-w-[50vw] lg:tw-h-[372px] lg:tw-left-0
            lg:tw-top-0

            sm:tw-h-auto sm:tw-w-[75%] sm:tw-aspect-[544/338]
          `}
        />
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
