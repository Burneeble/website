"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextRightStartShapeVerticalRightProps } from "./TextRightStartShapeVerticalRight.types";

const TextRightStartShapeVerticalRight = (
  props: TextRightStartShapeVerticalRightProps
) => {
  return (
    <div
      className={`
        text-right-start-shape-vertical-right section-layout tw-flex
        tw-items-center tw-justify-center cs-gap-between-content tw-flex-col
        tw-relative

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
            className="tw-mt-[20px]"
          >
            {props.buttonText}
          </Button>
        )}
      </div>
      <div
        className={`
          wrapper tw-relative tw-w-screen tw-aspect-[350/230]

          lg:tw-flex-1 lg:tw-h-[90vh]

          md:tw-h-[535px] md:tw-aspect-auto
        `}
      >
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-right-0 tw-top-1/2
            -tw-translate-y-1/2 tw-z-[-1] tw-h-[320px] tw-w-[200px]

            lg:tw-right-[unset] lg:tw-left-[calc((100vw/2)-10px-450px)]
            lg:tw-w-[450px] lg:tw-h-full

            md:tw-h-[600px] md:tw-w-[375px]
          `}
        />
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-aspect-[350/230]
            tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-1/2
            -tw-translate-x-1/2 tw-w-[calc(100%-40px)] tw-max-w-[385px]

            lg:tw-left-[calc((100vw/2)-10px-450px)] lg:tw-aspect-[328/675]
            lg:tw-min-w-[320px] lg:tw-w-fit

            md:tw-aspect-[385/535]
          `}
        >
          <ImageLayout {...props} mainAxis="width" />
        </div>
      </div>
    </div>
  );
};

export default TextRightStartShapeVerticalRight;
