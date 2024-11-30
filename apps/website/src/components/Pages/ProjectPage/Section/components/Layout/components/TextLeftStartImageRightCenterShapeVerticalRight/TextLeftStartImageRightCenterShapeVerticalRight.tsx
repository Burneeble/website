"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextLeftStartImageRightCenterShapeVerticalRightProps } from "./TextLeftStartImageRightCenterShapeVerticalRight.types";

const TextLeftStartImageRightCenterShapeVerticalRight = (
  props: TextLeftStartImageRightCenterShapeVerticalRightProps
) => {
  return (
    <div
      className={`
        text-left-start-image-right-center-shape-vertical-right section-layout
        tw-flex tw-items-center tw-justify-center tw-flex-col tw-gap-[30px]

        md:tw-gap-[60px]

        xl:tw-flex-row xl:tw-gap-[40px]
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
            className="tw-mt-[20px]"
          >
            {props.buttonText}
          </Button>
        )}
      </div>
      <div
        className={`
          images tw-flex-1 tw-flex tw-items-center tw-justify-center
          tw-aspect-[630/532] tw-relative tw-w-screen tw-px-[21px]

          xl:tw-w-full xl:tw-px-0
        `}
      >
        <div
          className={`
            layout-shape tw-rounded-l-lg tw-w-[111px] tw-h-[269px] tw-z-[-1]
            tw-top-[40px] tw-right-0

            md:tw-w-[183px] md:tw-h-[477px] md:tw-top-[-40px]

            xl:tw-w-[200px] xl:tw-h-[675px]
            xl:tw-left-[calc((100vw/2)-20px-200px)] xl:tw-top-1/2
            xl:-tw-translate-y-1/2 xl:tw-right-[unset]
          `}
        />
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default TextLeftStartImageRightCenterShapeVerticalRight;
