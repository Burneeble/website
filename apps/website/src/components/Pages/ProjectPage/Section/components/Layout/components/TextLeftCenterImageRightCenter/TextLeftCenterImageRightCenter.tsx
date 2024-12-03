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
        tw-items-center tw-justify-center tw-gap-[40px] tw-flex-col

        xl:tw-flex-row
      `}
    >
      <div
        className={`
          info tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center
        `}
      >
        <h2
          className="title tw-w-full tw-text-center"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p
          className="tw-text-center"
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
          images tw-flex-1 tw-flex tw-items-center tw-justify-center tw-w-full
          tw-aspect-square tw-max-w-[454px]

          xl:tw-max-w-[unset]
        `}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextLeftCenterImageRightCenter;
