"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextLeftCenterImageRightCenterProps } from "./TextLeftCenterImageRightCenter.types";

const TextLeftCenterImageRightCenter = (
  props: TextLeftCenterImageRightCenterProps
) => {
  return (
    <div
      className={`
        text-left-center-image-right-center section-layout tw-flex
        tw-items-center tw-justify-center tw-flex-col cs-gap-between-content

        lg:tw-flex-row
      `}
    >
      <div
        className={`
          cs-gap-between-text info tw-flex tw-flex-col tw-justify-center
          tw-items-center tw-flex-1

          md:tw-w-[calc(50%-.75rem)] md:tw-flex-[unset]
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
          images tw-flex tw-items-center tw-justify-center tw-w-full
          tw-aspect-square tw-max-w-[454px]
        `}
      >
        <ImageLayout {...props} mainAxis="width" />
      </div>
    </div>
  );
};

export default TextLeftCenterImageRightCenter;
