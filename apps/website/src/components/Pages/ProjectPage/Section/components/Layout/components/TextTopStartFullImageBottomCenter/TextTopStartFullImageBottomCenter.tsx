"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextTopStartFullImageBottomCenterProps } from "./TextTopStartFullImageBottomCenter.types";

const TextTopStartFullImageBottomCenter = (
  props: TextTopStartFullImageBottomCenterProps
) => {
  return (
    <div
      className={`
        text-top-start-full-image-bottom-center section-layout tw-flex
        tw-flex-col tw-items-center tw-justify-end tw-gap-[10px]
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

export default TextTopStartFullImageBottomCenter;
