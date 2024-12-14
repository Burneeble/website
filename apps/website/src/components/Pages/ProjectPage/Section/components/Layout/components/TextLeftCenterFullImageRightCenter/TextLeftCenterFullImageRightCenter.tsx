"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextLeftCenterFullImageRightCenterProps } from "./TextLeftCenterFullImageRightCenter.types";

const TextLeftCenterFullImageRightCenter = (
  props: TextLeftCenterFullImageRightCenterProps
) => {
  return (
    <div
      className={`
        text-left-center-full-image-right-center section-layout tw-flex
        tw-items-center tw-justify-center tw-flex-col cs-gap-between-content

        lg:tw-flex-row
      `}
    >
      <div
        className={`
          info tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center
          cs-gap-between-text

          lg:tw-max-w-[630px]
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
      <div
        className={`
          wrapper tw-flex-1 tw-w-full tw-relative tw-aspect-square
          tw-max-w-[454px]

          lg:tw-h-full lg:tw-w-auto lg:tw-max-w-[unset]
        `}
      >
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-aspect-square
            tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-0 tw-w-full
            tw-max-w-[454px]

            lg:tw-w-[calc(100vw/2-10px)] lg:tw-max-w-[unset]
          `}
        >
          <ImageLayout {...props} mainAxis="width" />
        </div>
      </div>
    </div>
  );
};

export default TextLeftCenterFullImageRightCenter;
