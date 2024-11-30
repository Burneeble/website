"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextRightStartShapeHorizontalRightProps } from "./TextRightStartShapeHorizontalRight.types";

const TextRightStartShapeHorizontalRight = (
  props: TextRightStartShapeHorizontalRightProps
) => {
  console.log(props.buttonText, props.buttonUrl);

  return (
    <div
      className={`
        text-right-center-shape-horizontal-right section-layout tw-flex
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
      <div className="wrapper tw-relative tw-flex-1">
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-left-0 tw-bottom-1/2 tw-w-[50vw]
            tw-h-[420px] tw-z-[-1]
          `}
        />
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-absolute
            tw-left-0 tw-top-1/2 -tw-translate-y-1/2 tw-h-[800px]
            tw-min-w-[50vw] tw-w-fit
          `}
        >
          <ImageLayout {...props} />
        </div>
      </div>
    </div>
  );
};

export default TextRightStartShapeHorizontalRight;