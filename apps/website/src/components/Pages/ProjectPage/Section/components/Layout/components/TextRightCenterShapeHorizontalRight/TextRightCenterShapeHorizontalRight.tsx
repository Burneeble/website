"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextRightCenterShapeHorizontalRightProps } from "./TextRightCenterShapeHorizontalRight.types";

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
            className={`
              tw-mt-[10px]

              md:tw-mt-[20px]
            `}
          >
            {props.buttonText}
          </Button>
        )}
      </div>
      <div
        className={`
          wrapper tw-relative tw-flex-1 tw-w-screen tw-aspect-[390/241]

          lg:tw-aspect-auto lg:tw-h-screen

          md:tw-aspect-[744/530]
        `}
      >
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-bottom-1/2 tw-h-[364px] tw-w-[202px]
            tw-translate-y-1/2 tw-right-0 tw-z-[-1]

            lg:tw-right-[unset] lg:tw-w-[50vw] lg:tw-h-[372px] lg:tw-left-0
            lg:tw-top-0

            md:tw-h-[340px] md:tw-w-[545px] md:tw-translate-y-0
            md:tw-bottom-[unset] md:tw-top-[-20px]
          `}
        />
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-absolute
            tw-left-1/2 -tw-translate-x-1/2 tw-top-1/2 -tw-translate-y-1/2
            tw-min-w-[50vw] tw-w-[calc(100%-40px)] tw-aspect-[350/230]

            lg:tw-py-0 lg:tw-left-0 lg:tw-h-[95%] lg:tw-translate-x-0
            lg:tw-w-auto lg:tw-justify-start

            md:tw-py-[30px]
          `}
        >
          <ImageLayout {...props} />
        </div>
      </div>
    </div>
  );
};

export default TextRightCenterShapeHorizontalRight;
