"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextLeftStartFullImageRightCenterProps } from "./TextLeftStartFullImageRightCenter.types";

const TextLeftStartFullImageRightCenter = (
  props: TextLeftStartFullImageRightCenterProps
) => {
  return (
    <div
      className={`
        text-left-start-full-image-right-center section-layout tw-flex
        tw-items-center tw-justify-center cs-gap-between-content tw-flex-col

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
      <div
        className={`
          wrapper tw-flex-1 tw-w-full tw-relative tw-aspect-square
          tw-max-w-[454px]

          xl:tw-h-full xl:tw-w-auto xl:tw-max-w-[unset]
        `}
      >
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-aspect-square
            tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-0 tw-w-full
            tw-max-w-[454px]

            xl:tw-w-[calc(100vw/2-10px)] xl:tw-max-w-[unset]
          `}
        >
          <ImageLayout {...props} />
        </div>
      </div>
    </div>
  );
};

export default TextLeftStartFullImageRightCenter;
