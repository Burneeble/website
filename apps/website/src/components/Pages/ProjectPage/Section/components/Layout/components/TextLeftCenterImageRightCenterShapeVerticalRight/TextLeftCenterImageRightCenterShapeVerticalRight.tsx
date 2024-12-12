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

        xl:tw-flex-row
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

          md:tw-h-[515px]

          xl:tw-h-auto xl:tw-flex-1
        `}
      >
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-top-1/2 -tw-translate-y-1/2
            tw-z-[-1] tw-left-[calc(100vw-110px)] tw-w-[110px] tw-h-[350px]

            md:tw-left-[calc(100vw-250px)] md:tw-w-[250px] md:tw-h-[515px]

            xl:tw-left-[calc((100vw/2)-10px-200px)] xl:tw-w-[200px]
            xl:tw-h-[675px] xl:tw-max-w-[unset]
          `}
        />
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-w-full
            tw-aspect-[630/532] tw-relative tw-max-w-[450px] tw-mx-[20px]

            xl:tw-mx-0
          `}
        >
          <ImageLayout {...props} />
        </div>
      </div>
    </div>
  );
};

export default TextLeftCenterImageRightCenterShapeVerticalRight;