"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextTopStartImageBottomCenterProps } from "./TextTopStartImageBottomCenter.types";

const TextTopStartImageBottomCenter = (
  props: TextTopStartImageBottomCenterProps
) => {
  return (
    <div
      className={`
        text-top-start-image-bottom-center section-layout tw-flex tw-flex-col
        tw-items-center tw-justify-center tw-gap-[10px]
      `}
    >
      <h2
        className="title tw-w-full"
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
      <p dangerouslySetInnerHTML={{ __html: props.text }} />
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
          tw-justify-center tw-h-[293px]

          md:tw-h-[480px]
        `}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextTopStartImageBottomCenter;
