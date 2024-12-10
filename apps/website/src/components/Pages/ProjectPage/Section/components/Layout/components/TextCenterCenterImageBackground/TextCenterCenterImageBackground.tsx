"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextCenterCenterImageBackgroundProps } from "./TextCenterCenterImageBackground.types";

const TextCenterCenterImageBackground = (
  props: TextCenterCenterImageBackgroundProps
) => {
  return (
    <div
      className={`
        text-top-center-full-image-bottom-center section-layout tw-flex
        tw-flex-col tw-items-center tw-justify-center tw-relative tw-w-screen
        tw-h-screen cs-gap-between-content
      `}
    >
      <div
        className={`
          info tw-flex tw-items-center tw-justify-center tw-flex-col
          cs-gap-between-text
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
      </div>
      <div
        className={`
          images tw-w-screen tw-h-screen tw-flex tw-items-center
          tw-justify-center tw-z-[-1] tw-absolute tw-top-1/2 tw-left-1/2
          -tw-translate-x-1/2 -tw-translate-y-1/2
        `}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextCenterCenterImageBackground;
