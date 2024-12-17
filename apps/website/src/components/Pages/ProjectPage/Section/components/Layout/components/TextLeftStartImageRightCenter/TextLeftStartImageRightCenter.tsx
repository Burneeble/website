"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextLeftStartImageRightCenterProps } from "./TextLeftStartImageRightCenter.types";

const TextLeftStartImageRightCenter = (
  props: TextLeftStartImageRightCenterProps
) => {
  return (
    <div
      className={`
        text-left-start-image-right-center section-layout tw-flex
        tw-items-center tw-justify-center tw-flex-col cs-gap-between-content

        lg:tw-flex-row
      `}
    >
      <div
        className={`
          info tw-flex tw-flex-col tw-justify-center tw-items-start
          cs-gap-between-text tw-flex-1

          lg:tw-max-w-[630px] lg:tw-flex-1 lg:tw-w-[calc(50%-.75rem)]
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
          images tw-flex tw-items-center tw-justify-center tw-w-full
          tw-aspect-square tw-max-w-[630px]

          lg:tw-flex-1
        `}
      >
        <ImageLayout {...props} mainAxis="width" />
      </div>
    </div>
  );
};

export default TextLeftStartImageRightCenter;
