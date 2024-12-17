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
          className="p-default text tw-mb-[50px]"
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

          lg:tw-h-[35rem]

          md:tw-h-[475px]
        `}
      >
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-z-[5]
            tw-absolute tw-left-1/2 -tw-translate-x-1/2 tw-top-0
            tw-w-[calc(100vw-40px)] tw-aspect-[350/230]

            lg:tw-h-full lg:tw-aspect-[2/1]

            md:tw-bottom-0 md:tw-top-[unset] md:tw-w-full md:tw-aspect-[680/485]
          `}
        >
          <ImageLayout {...props} />
        </div>
        <div
          className={`
            layout-shape tw-left-1/2 tw-bottom-0 tw-h-[164px] tw-w-screen
            -tw-translate-x-1/2

            lg:tw-h-[411px]

            md:tw-h-[250px] md:tw-w-full

            sm:tw-rounded-t-lg
          `}
        />
      </div>
    </div>
  );
};

export default TextTopStartShapeHorizontalBottom;
