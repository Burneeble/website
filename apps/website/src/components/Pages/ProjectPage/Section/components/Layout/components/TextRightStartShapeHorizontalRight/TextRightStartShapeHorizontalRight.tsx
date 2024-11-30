"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextRightStartShapeHorizontalRightProps } from "./TextRightStartShapeHorizontalRight.types";

const TextRightStartShapeHorizontalRight = (
  props: TextRightStartShapeHorizontalRightProps
) => {
  return (
    <div
      className={`
        text-right-center-shape-horizontal-right section-layout tw-flex
        tw-items-center tw-justify-center tw-gap-[30px] tw-flex-col

        xl:tw-flex-row xl:tw-gap-0
      `}
    >
      <div
        className={`
          info tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-start
          tw-gap-[10px]
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
            className={`
              tw-mt-[10px]

              md:tw-mt-[20px]
            `}
          >
            {props.buttonText}
          </Button>
        )}
      </div>
      <div
        className={`
          wrapper tw-relative tw-flex-1 tw-w-screen tw-aspect-[390/241]

          md:tw-aspect-[744/530]

          xl:tw-aspect-auto xl:tw-h-screen
        `}
      >
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-bottom-1/2 tw-z-[-1] tw-h-[265px]
            tw-w-[111px] tw-translate-y-1/2 tw-right-0

            md:tw-h-[447px] md:tw-w-[185px] md:tw-translate-y-0
            md:tw-bottom-[115px]

            xl:tw-right-[unset] xl:tw-w-[50vw] xl:tw-h-[275px] xl:tw-left-0
            xl:tw-top-0 xl:tw-bottom-[unset]
          `}
        />
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-absolute
            tw-left-1/2 -tw-translate-x-1/2 tw-top-1/2 -tw-translate-y-1/2
            tw-min-w-[50vw] tw-w-fit tw-h-full

            md:tw-py-[30px]

            xl:tw-left-0 xl:tw-h-[800px] xl:tw-translate-x-0 xl:tw-w-auto
          `}
        >
          <ImageLayout {...props} />
        </div>
      </div>
    </div>
  );
};

export default TextRightStartShapeHorizontalRight;
