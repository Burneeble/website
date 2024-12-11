"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextTopStartShapeHorizontalBottomProps } from "./TextTopStartShapeHorizontalBottom.types";

const TextTopStartShapeHorizontalBottom = (
  props: TextTopStartShapeHorizontalBottomProps
) => {
  return (
    <div
      className={`
        text-top-start-shape-horizontal-bottom section-layout tw-flex
        tw-flex-col tw-items-center tw-justify-end cs-gap-between-content
      `}
    >
      <div
        className={`
          info tw-flex tw-items-center tw-justify-center tw-flex-col
          cs-gap-between-text
        `}
      >
        <h2
          className="title tw-w-full"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p
          className="text tw-mb-[50px]"
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
      <div className={`wrapper tw-relative tw-w-full tw-h-[600px]`}>
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-z-[5]
            tw-absolute tw-left-1/2 -tw-translate-x-1/2 tw-top-0
            tw-w-[calc(100vw-40px)] tw-aspect-[350/230]

            md:tw-bottom-[50px] md:tw-top-[unset] md:tw-w-[100%]
            md:tw-aspect-[680/485]

            xl:tw-h-full xl:tw-w-fit
          `}
        >
          <ImageLayout {...props} />
        </div>
        <div
          className={`
            layout-shape tw-rounded-t-lg tw-w-full tw-h-[411px] tw-left-0
            tw-bottom-0
          `}
        ></div>
      </div>
    </div>
  );
};

export default TextTopStartShapeHorizontalBottom;
