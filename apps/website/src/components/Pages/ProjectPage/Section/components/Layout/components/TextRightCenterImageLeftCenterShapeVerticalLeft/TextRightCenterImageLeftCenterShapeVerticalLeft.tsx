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
        tw-flex tw-items-center tw-justify-center tw-flex-col-reverse
        cs-gap-between-content

        lg:tw-flex-row
      `}
    >
      <div
        className={`
          wrapper tw-w-screen tw-flex tw-items-center tw-justify-center
          tw-relative tw-h-[350px]

          lg:tw-h-auto lg:tw-flex-1

          md:tw-h-[515px]
        `}
      >
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-left-[calc(100vw-110px)] tw-top-1/2
            -tw-translate-y-1/2 tw-w-[110px] tw-h-[350px] tw-z-[-1]

            lg:tw-right-[calc((100vw/2)-10px-200px)] lg:tw-w-[200px]
            lg:tw-h-[675px] lg:tw-max-w-[unset] lg:tw-rounded-r-lg
            lg:tw-rounded-l-none lg:tw-left-[unset]

            md:tw-left-[calc(100vw-250px)] md:tw-w-[250px] md:tw-h-[515px]
          `}
        />
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-w-full
            tw-aspect-[630/532] tw-relative tw-max-w-[450px] tw-mx-[20px]

            lg:tw-flex-1 lg:tw-mx-0
          `}
        >
          <ImageLayout {...props} mainAxis="width" />
        </div>
      </div>
      <div
        className={`
          info tw-flex tw-flex-col tw-justify-center tw-items-start
          cs-gap-between-text

          lg:tw-flex-1 lg:tw-max-w-[630px]
        `}
      >
        <h2
          className="title tw-text-center tw-w-full"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p
          className="text tw-text-center p-default"
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

export default TextRightCenterImageLeftCenterShapeVerticalLeft;
