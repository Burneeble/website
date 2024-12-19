"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import ImageLayout from "../ImageLayout";
import { TextTopCenterShapeHorizontalBottomProps } from "./TextTopCenterShapeHorizontalBottom.types";
import { ImageLayoutType } from "../../../../Section.types";
import { SectionInfo } from "../Common";

const TextTopCenterShapeHorizontalBottom = (
  props: TextTopCenterShapeHorizontalBottomProps
) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={`
        text-top-center-shape-horizontal-bottom section-layout tw-flex
        tw-flex-col tw-items-center tw-justify-end cs-gap-between-content
      `}
    >
      <SectionInfo {...props} textAlignment="center" />
      <div
        className={`
          wrapper tw-relative tw-w-full tw-h-[calc(82px+(230/350*(100vw-40px)))]

          lg:tw-h-[35rem]

          md:tw-h-[475px] md:tw-min-h-[unset]

          sm:tw-min-h-[475px]
        `}
      >
        <div
          className={`
            images tw-flex tw-items-center tw-justify-center tw-z-[5]
            tw-absolute tw-left-1/2 -tw-translate-x-1/2 tw-top-0
            tw-w-[calc(100vw-40px)] tw-aspect-[350/228]

            lg:tw-h-full lg:tw-aspect-[2/1] lg:tw-w-[unset]

            md:tw-h-[500px] md:tw-bottom-0 md:tw-top-[unset] md:tw-translate-y-0

            sm:tw-top-1/2 sm:tw-left-1/2 sm:-tw-translate-y-1/2 sm:tw-w-full
            sm:tw-h-[80%]
          `}
        >
          <ImageLayout
            {...props}
            mainAxis={
              [ImageLayoutType.LaptopSmarthphoneImagesLayout].includes(
                props.imageLayoutType
              ) && !["sm", "md"].includes(screen)
                ? "width"
                : "height"
            }
          />
        </div>
        <div
          className={`
            layout-shape tw-left-1/2 tw-bottom-0 tw-h-[164px] tw-w-screen
            -tw-translate-x-1/2

            lg:tw-h-[411px]

            md:tw-h-[250px]

            sm:tw-w-full sm:tw-rounded-t-lg
          `}
        />
      </div>
    </div>
  );
};

export default TextTopCenterShapeHorizontalBottom;
