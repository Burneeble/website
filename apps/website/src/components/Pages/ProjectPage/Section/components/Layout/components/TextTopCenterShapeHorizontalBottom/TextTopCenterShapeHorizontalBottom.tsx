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
        tw-flex-col tw-items-center tw-justify-end tw-gap-[10px]
      `}
    >
      <h2
        className="title tw-w-full tw-text-center"
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
      <p
        className="tw-text-center tw-mb-[50px]"
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
      <div
        className={`wrapper tw-relative tw-w-full tw-mt-[30px] tw-h-[600px]`}
      >
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-w-fit tw-h-full
            tw-z-[5] tw-absolute tw-left-1/2 -tw-translate-x-1/2 tw-top-0
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

export default TextTopCenterShapeHorizontalBottom;
