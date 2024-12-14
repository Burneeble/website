"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextLeftCenterImageRightCenterShapeVerticalRightProps } from "./TextLeftCenterImageRightCenterShapeVerticalRight.types";

const TextLeftCenterImageRightCenterShapeVerticalRight = (
  props: TextLeftCenterImageRightCenterShapeVerticalRightProps
) => {
  return (
    <div
      className={`
        text-left-center-image-right-center-shape-vertical-right section-layout
        tw-flex tw-items-center tw-justify-center cs-gap-between-content
        tw-flex-col

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
          wrapper tw-w-screen tw-flex tw-items-center tw-justify-center
          tw-relative tw-h-[350px]

          lg:tw-h-auto lg:tw-flex-1

          md:tw-h-[515px]
        `}
      >
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-top-1/2 -tw-translate-y-1/2
            tw-z-[-1] tw-left-[calc(100vw-110px)] tw-w-[110px] tw-h-[350px]

            lg:tw-left-[calc((100vw/2)-10px-200px)] lg:tw-w-[200px]
            lg:tw-h-[675px] lg:tw-max-w-[unset]

            md:tw-left-[calc(100vw-250px)] md:tw-w-[250px] md:tw-h-[515px]
          `}
        />
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-w-full
            tw-aspect-[630/532] tw-relative tw-max-w-[450px] tw-mx-[20px]

            lg:tw-mx-0
          `}
        >
          <ImageLayout {...props} mainAxis="width" />
        </div>
      </div>
    </div>
  );
};

export default TextLeftCenterImageRightCenterShapeVerticalRight;