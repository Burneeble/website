"use client";

import { Button } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { FigmaLayoutProps } from "./FigmaLayout.types";

const FigmaLayout = (props: FigmaLayoutProps) => {
  return (
    <div
      className={`
        figma-layout section-layout tw-flex tw-flex-col tw-justify-center
        tw-items-center
      `}
    >
      <div
        className={`
          info tw-flex tw-items-center tw-justify-center tw-flex-col
          cs-gap-between-text
        `}
      >
        <h2
          className="title tw-text-center"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p
          className="text tw-text-center"
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
          tw-flex tw-items-center tw-justify-center images tw-w-screen
          tw-h-[345px]

          md:tw-h-[485px]

          xl:tw-h-[375px]
        `}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default FigmaLayout;
