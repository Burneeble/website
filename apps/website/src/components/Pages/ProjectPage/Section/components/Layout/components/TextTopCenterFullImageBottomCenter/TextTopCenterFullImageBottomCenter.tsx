"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextTopCenterFullImageBottomCenterProps } from "./TextTopCenterFullImageBottomCenter.types";

const TextTopCenterFullImageBottomCenter = (
  props: TextTopCenterFullImageBottomCenterProps
) => {
  return (
    <div
      className={`
        text-top-center-full-image-bottom-center section-layout tw-flex
        tw-flex-col tw-items-center tw-justify-end cs-gap-between-content
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
          className="text tw-text-center"
          dangerouslySetInnerHTML={{ __html: props.text }}
        />
        {props.buttonText && props.buttonUrl && (
          <Button
            onClick={() => {
              window.open(props.buttonUrl, "_blank");
            }}
            size={props.buttonSize}
          >
            {props.buttonText}
          </Button>
        )}
      </div>
      <div
        className={`
          images tw-w-full tw-flex tw-items-center tw-justify-center
          tw-h-[410px]

          md:tw-h-[600px]
        `}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextTopCenterFullImageBottomCenter;
