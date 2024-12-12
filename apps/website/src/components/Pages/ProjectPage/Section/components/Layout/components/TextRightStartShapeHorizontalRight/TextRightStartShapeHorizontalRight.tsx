"use client";

import { Button, useClientInfoService } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextRightStartShapeHorizontalRightProps } from "./TextRightStartShapeHorizontalRight.types";

const TextRightStartShapeHorizontalRight = (
  props: TextRightStartShapeHorizontalRightProps
) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={`
        text-right-center-shape-horizontal-right section-layout tw-flex
        tw-items-center tw-justify-center cs-gap-between-content tw-flex-col

        lg:tw-flex-row
      `}
    >
      <div
        className={`
          info tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-start
          cs-gap-between-text
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
            fit={screen == "sm" ? "full" : "inline"}
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

          lg:tw-aspect-auto lg:tw-h-screen

          md:tw-aspect-[744/530]
        `}
      >
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-bottom-1/2 tw-z-[-1] tw-h-full
            tw-aspect-[202/318] tw-translate-y-1/2 tw-right-0

            lg:tw-right-[unset] lg:tw-w-[50vw] lg:tw-h-[372px] lg:tw-left-0
            lg:tw-top-0

            md:tw-h-[340px] md:tw-w-[545px] md:tw-translate-y-0
            md:tw-bottom-[unset] md:tw-top-[-20px] md:tw-aspect-auto
          `}
        />
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-absolute
            tw-left-1/2 -tw-translate-x-1/2 tw-top-1/2 -tw-translate-y-1/2
            tw-min-w-[50vw] tw-w-[calc(100%-40px)] tw-aspect-[350/230]

            lg:tw-left-0 lg:tw-h-[800px] lg:tw-translate-x-0 lg:tw-w-auto

            md:tw-py-[30px] md:tw-top-[40%]
          `}
        >
          <ImageLayout {...props} />
        </div>
      </div>
    </div>
  );
};

export default TextRightStartShapeHorizontalRight;