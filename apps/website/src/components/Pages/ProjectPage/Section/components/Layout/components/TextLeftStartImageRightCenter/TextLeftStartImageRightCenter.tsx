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
        tw-items-center tw-justify-center tw-gap-[40px]
      `}
    >
      <div
        className={`
          info tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-start
        `}
      >
        <h1
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
      </div>
      <div
        className={`
          images tw-flex-1 tw-flex tw-items-center tw-justify-center tw-w-full
          tw-aspect-square
        `}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextLeftStartImageRightCenter;
