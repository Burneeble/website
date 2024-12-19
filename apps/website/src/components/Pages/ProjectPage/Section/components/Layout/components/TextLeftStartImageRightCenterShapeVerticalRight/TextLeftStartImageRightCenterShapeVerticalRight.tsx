"use client";

import ImageLayout from "../ImageLayout";
import { TextLeftStartImageRightCenterShapeVerticalRightProps } from "./TextLeftStartImageRightCenterShapeVerticalRight.types";
import { SectionInfo, VerticalShape } from "../Common";

const TextLeftStartImageRightCenterShapeVerticalRight = (
  props: TextLeftStartImageRightCenterShapeVerticalRightProps
) => {
  return (
    <div
      className={`
        text-left-start-image-right-center-shape-vertical-right section-layout
        tw-flex tw-items-center tw-justify-center tw-flex-col
        cs-gap-between-content

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" textAlignment="left" />
      <div
        className={`
          wrapper tw-w-screen tw-flex tw-items-center tw-justify-center
          tw-relative tw-h-[350px]

          lg:tw-h-[675px] lg:tw-flex-1

          sm:tw-h-[515px]
        `}
      >
        <VerticalShape align={"right"} />
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

export default TextLeftStartImageRightCenterShapeVerticalRight;
