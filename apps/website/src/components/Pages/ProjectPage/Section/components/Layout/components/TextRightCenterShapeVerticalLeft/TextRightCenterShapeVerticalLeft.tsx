"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextRightCenterShapeVerticalLeftProps } from "./TextRightCenterShapeVerticalLeft.types";

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
          wrapper tw-relative tw-w-screen tw-aspect-[350/230]

          lg:tw-flex-1 lg:tw-h-[90vh]

          md:tw-h-[535px] md:tw-aspect-auto
        `}
      >
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-right-0 tw-top-1/2
            -tw-translate-y-1/2 tw-z-[-1] tw-h-[320px] tw-w-[200px]

            lg:tw-right-[calc((100vw/2)-10px-450px)] lg:tw-w-[450px]
            lg:tw-h-full lg:tw-rounded-r-lg lg:tw-rounded-l-none

            md:tw-h-[600px] md:tw-w-[375px]
          `}
        />
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-aspect-[350/230]
            tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-1/2
            -tw-translate-x-1/2 tw-w-[calc(100%-40px)] tw-max-w-[385px]

            lg:tw-right-[calc((100vw/2)-10px-450px)] lg:tw-aspect-[328/675]
            lg:tw-min-w-[320px] lg:tw-w-fit lg:tw-left-[unset]
            lg:tw-translate-x-1/2

            md:tw-aspect-[385/535]
          `}
        >
          <ImageLayout {...props} mainAxis="width" />
        </div>
      </div>
      <div
        className={`
          info tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center
          cs-gap-between-text
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
