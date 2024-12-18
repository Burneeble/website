"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextRightCenterShapeHorizontalLeftProps } from "./TextRightCenterShapeHorizontalLeft.types";

const TextRightCenterShapeHorizontalLeft = (
  props: TextRightCenterShapeHorizontalLeftProps
) => {
  return (
    <div
      className={`
        text-right-center-shape-horizontal-left section-layout tw-flex
        tw-items-center tw-justify-center cs-gap-between-content
        tw-flex-col-reverse

        lg:tw-flex-row
      `}
    >
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

            lg:tw-right-0 lg:tw-w-[50vw] lg:tw-h-[372px] lg:tw-top-0
            lg:tw-rounded-r-lg lg:tw-rounded-l-none

            sm:tw-h-auto sm:tw-w-[75%] sm:tw-aspect-[544/338]
          `}
        />
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-absolute
            tw-left-1/2 -tw-translate-x-1/2 tw-top-1/2 -tw-translate-y-1/2
            tw-min-w-[50vw] tw-w-[calc(100%-40px)] tw-aspect-[350/230]

            lg:tw-right-0 lg:tw-left-[unset] lg:tw-translate-x-0 lg:tw-w-auto
            lg:tw-py-0 lg:tw-h-[95%] lg:tw-justify-end

            md:tw-py-[30px]
          `}
        >
          <ImageLayout {...props} />
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
            className={`
              tw-mt-[10px]

              md:tw-mt-[20px]
            `}
          >
            {props.buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default TextRightCenterShapeHorizontalLeft;
