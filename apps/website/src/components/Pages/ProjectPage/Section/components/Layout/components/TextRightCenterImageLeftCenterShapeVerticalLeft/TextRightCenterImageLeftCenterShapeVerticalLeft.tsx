"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextRightCenterImageLeftCenterShapeVerticalLeftProps } from "./TextRightCenterImageLeftCenterShapeVerticalLeft.types";

const TextRightCenterImageLeftCenterShapeVerticalLeft = (
  props: TextRightCenterImageLeftCenterShapeVerticalLeftProps
) => {
  return (
    <div
      className={`
        text-left-start-image-right-center-shape-vertical-right section-layout
        tw-flex tw-items-center tw-justify-center tw-gap-[40px]
      `}
    >
      <div
        className={`
          images tw-flex-1 tw-flex tw-items-center tw-justify-center tw-w-full
          tw-aspect-[630/532] tw-relative
        `}
      >
        <div
          className={`
            layout-shape tw-rounded-r-lg tw-right-[calc((100vw/2)-20px-200px)]
            tw-top-1/2 -tw-translate-y-1/2 tw-w-[200px] tw-h-[675px] tw-z-[-1]
          `}
        />
        <ImageLayout {...props} />
      </div>

      <div
        className={`
          info tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-start
        `}
      >
        <h2
          className="title tw-w-full"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p dangerouslySetInnerHTML={{ __html: props.text }} />
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

export default TextRightCenterImageLeftCenterShapeVerticalLeft;
