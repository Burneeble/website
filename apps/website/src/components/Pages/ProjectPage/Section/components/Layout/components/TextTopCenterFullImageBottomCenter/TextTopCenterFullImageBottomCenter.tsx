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
        tw-flex-col tw-items-center tw-justify-end tw-gap-[10px]
      `}
    >
      <h1
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
      <div
        className={`
          images tw-w-full tw-mt-[30px] tw-flex tw-items-center
          tw-justify-center tw-h-[600px]
        `}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextTopCenterFullImageBottomCenter;
