"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextRightCenterShapeVerticalLeftProps } from "./TextRightCenterShapeVerticalLeft.types";
import { cn } from "@/lib/utils";
import { ImageLayoutType } from "../../../../Section.types";

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
      <div
        className={`
          wrapper tw-relative tw-w-screen tw-aspect-[400/300]

          lg:tw-flex-1 lg:tw-h-[90vh]

          md:tw-h-[535px] md:tw-aspect-auto

          sm:tw-h-[450px]
        `}
      >
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-right-0 tw-top-1/2
            -tw-translate-y-1/2 tw-z-[-1] tw-h-full tw-w-[50vw]

            lg:tw-right-[calc((100vw/2)-10px-74%)] lg:tw-w-[74%] lg:tw-h-full
            lg:tw-rounded-r-lg lg:tw-rounded-l-none

            md:tw-h-[600px] md:tw-w-[50vw]
          `}
        />
        <div
          className={cn(
            `
              images tw-flex tw-items-center tw-justify-center
              tw-aspect-[350/230] tw-absolute tw-top-1/2 -tw-translate-y-1/2
              tw-left-1/2 -tw-translate-x-1/2 tw-w-[calc(100%-40px)]
              tw-max-w-[385px]

              lg:tw-right-[calc((100vw/2)-10px-74%)] lg:tw-aspect-[328/675]
              lg:tw-w-[calc(100%-40px)] lg:tw-min-w-[320px] lg:tw-left-[unset]
              lg:tw-translate-x-1/2 lg:tw-h-[unset]

              md:tw-aspect-square md:tw-h-[85%] md:tw-w-auto md:tw-max-w-[unset]

              sm:tw-aspect-[385/535]
            `,
            [ImageLayoutType.SmarthphoneImageLayout].includes(
              props.imageLayoutType
            )
              ? `lg:tw-w-[600px] lg:tw-max-w-[600px]`
              : `lg:tw-max-w-[385px]`
          )}
        >
          <ImageLayout {...props} mainAxis="width" />
        </div>
      </div>
      <div
        className={`
          info tw-flex tw-flex-col tw-justify-center tw-items-center
          cs-gap-between-text

          lg:tw-flex-1 lg:tw-max-w-[630px]
        `}
      >
        <h2
          className="title tw-w-full tw-text-center"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p
          className="text p-default tw-text-center"
          dangerouslySetInnerHTML={{ __html: props.text }}
        />
        {props.buttonText && props.buttonUrl && (
          <Button
            onClick={() => {
              window.open(props.buttonUrl, "_blank");
            }}
            size={props.buttonSize}
            className="tw-mt-[20px]"
          >
            {props.buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default TextRightCenterShapeVerticalLeft;
