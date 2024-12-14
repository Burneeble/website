"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextRightCenterFullImageLeftCenterProps } from "./TextRightCenterFullImageLeftCenter.types";

const TextRightCenterFullImageLeftCenter = (
  props: TextRightCenterFullImageLeftCenterProps
) => {
  return (
    <div
      className={`
        text-right-center-full-image-left-center section-layout tw-flex
        tw-items-center tw-justify-center tw-flex-col-reverse
        cs-gap-between-content

        lg:tw-flex-row
      `}
    >
      <div
        className={`
          wrapper tw-flex-1 tw-w-full tw-relative tw-aspect-square
          tw-max-w-[454px] cs-gap-between-text

          lg:tw-h-full lg:tw-w-auto lg:tw-max-w-[unset]
        `}
      >
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-aspect-square
            tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-right-0 tw-w-full
            tw-max-w-[454px]

            lg:tw-w-[calc(100vw/2-10px)] lg:tw-max-w-[unset]
          `}
        >
          <ImageLayout {...props} mainAxis="width" />
        </div>
      </div>
      <div
        className={`
          info tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-start

          lg:tw-max-w-[630px]
        `}
      >
        <h2
          className="title tw-w-full"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p
          className="text p-default"
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

export default TextRightCenterFullImageLeftCenter;
