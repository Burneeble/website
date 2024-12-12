"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextTopCenterShapeHorizontalBottomProps } from "./TextTopCenterShapeHorizontalBottom.types";

const TextTopCenterShapeHorizontalBottom = (
  props: TextTopCenterShapeHorizontalBottomProps
) => {
  return (
    <div
      className={`
        text-top-center-shape-horizontal-bottom section-layout tw-flex
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
          className="title tw-w-full tw-text-center"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p
          className="p-default text tw-text-center tw-mb-[50px]"
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
      <div
        className={`
          wrapper tw-relative tw-w-full tw-h-[calc(82px+(230/350*(100vw-40px)))]

          md:tw-h-[600px]
        `}
      >
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
            layout-shape tw-rounded-t-lg tw-left-1/2 tw-bottom-0 tw-h-[164px]
            tw-w-screen -tw-translate-x-1/2

            md:tw-h-[250px] md:tw-w-full

            xl:tw-h-[411px]
          `}
        />
      </div>
    </div>
  );
};

export default TextTopCenterShapeHorizontalBottom;
