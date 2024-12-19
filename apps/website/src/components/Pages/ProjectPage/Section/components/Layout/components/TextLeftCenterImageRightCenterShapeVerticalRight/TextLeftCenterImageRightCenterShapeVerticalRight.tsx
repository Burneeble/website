"use client";

import ImageLayout from "../ImageLayout";
import { TextLeftCenterImageRightCenterShapeVerticalRightProps } from "./TextLeftCenterImageRightCenterShapeVerticalRight.types";
import { SectionInfo } from "../Common";

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
      <div
        className={`
          wrapper tw-w-screen tw-flex tw-items-center tw-justify-center
          tw-relative tw-h-[350px]

          lg:tw-h-[675px] lg:tw-flex-1

          sm:tw-h-[515px]
        `}
      >
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-top-1/2 -tw-translate-y-1/2
            tw-z-[-1] tw-left-[calc(100vw-110px)] tw-w-[110px] tw-h-[350px]

            lg:tw-left-[calc((100vw/2)-10px-200px)] lg:tw-w-[200px]
            lg:tw-h-[675px] lg:tw-max-w-[unset]

            sm:tw-left-[calc(100vw-250px)] sm:tw-w-[250px] sm:tw-h-[515px]
            sm:tw-aspect-auto
          `}
        />
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-w-full
            tw-aspect-[630/532] tw-relative tw-max-w-[454px] tw-mx-[20px]

            lg:tw-max-w-[630px] lg:tw-mx-0
          `}
        >
          <ImageLayout {...props} mainAxis="width" />
        </div>
      </div>
    </div>
  );
};

export default TextLeftCenterImageRightCenterShapeVerticalRight;
