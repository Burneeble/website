"use client";

import ImageLayout from "../ImageLayout";
import { TextRightStartShapeVerticalRightProps } from "./TextRightStartShapeVerticalRight.types";
import { ImageLayoutType } from "../../../../Section.types";
import { cn } from "@/lib/utils";
import { SectionInfo, VerticalShape2 } from "../Common";

const TextRightStartShapeVerticalRight = (
  props: TextRightStartShapeVerticalRightProps
) => {
  return (
    <div
      className={`
        text-right-start-shape-vertical-right section-layout tw-flex
        tw-items-center tw-justify-center cs-gap-between-content tw-flex-col
        tw-relative

        lg:tw-flex-row
      `}
    >
      <SectionInfo {...props} alignment="left" textAlignment="left" />
      <div
        className={`
          wrapper tw-relative tw-w-screen tw-aspect-[400/300]

          lg:tw-flex-1 lg:tw-h-[90vh]

          md:tw-h-[535px] md:tw-aspect-auto

          sm:tw-h-[450px]
        `}
      >
        <VerticalShape2 align={"right"} />
        <div
          className={cn(
            `
              images tw-flex tw-items-center tw-justify-center
              tw-aspect-[350/230] tw-absolute tw-top-1/2 -tw-translate-y-1/2
              tw-left-1/2 -tw-translate-x-1/2 tw-w-[calc(100%-40px)]
              tw-max-w-[385px]

              lg:tw-w-[calc(100%-40px)] lg:tw-left-[calc((100vw/2)-10px-74%)]
              lg:tw-aspect-[328/675] lg:tw-min-w-[320px] lg:tw-h-[unset]

              md:tw-aspect-square md:tw-h-[85%] md:tw-w-auto md:tw-max-w-[unset]

              sm:tw-aspect-[385/535]
            `,
            [ImageLayoutType.SmarthphoneImageLayout].includes(
              props.imageLayoutType
            )
              ? `lg:tw-w-[600px] lg:tw-max-w-[600px]`
              : `lg:tw-max-w-[385px] lg:tw-max-h-[100vh]`
          )}
        >
          <ImageLayout {...props} mainAxis="width" />
        </div>
      </div>
    </div>
  );
};

export default TextRightStartShapeVerticalRight;
