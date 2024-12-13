"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextRightCenterImageLeftCenterProps } from "./TextRightCenterImageLeftCenter.types";

const TextRightCenterImageLeftCenter = (
  props: TextRightCenterImageLeftCenterProps
) => {
  return (
    <div
      className={`
        text-right-center-image-left-center section-layout tw-flex
        tw-items-center tw-justify-center tw-flex-col-reverse
        cs-gap-between-content

        lg:tw-flex-row
      `}
    >
      <div
        className={`
          images tw-flex tw-items-center tw-justify-center tw-w-full
          tw-aspect-square tw-max-w-[454px] cs-gap-between-text
        `}
      >
        <ImageLayout {...props} mainAxis="width" />
      </div>
      <div
        className={`
          info tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-start

          md:tw-w-[calc(50%-.75rem)] md:tw-flex-[unset]
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
    </div>
  );
};

export default TextRightCenterImageLeftCenter;
