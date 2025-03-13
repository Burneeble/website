"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { BottomShape } from "../../Shapes";
import { ShapeBottomImagesWrapperProps } from "./ShapeBottomImagesWrapper.types";
import ImageLayout from "../../../ImageLayout";
import { ImageLayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const ShapeBottomImagesWrapper = (props: ShapeBottomImagesWrapperProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={`
        wrapper tw-relative tw-h-[calc(82px+(230/350*(100vw-40px)))] tw-w-full

        lg:tw-mt-0 lg:tw-h-[35rem]

        md:tw-h-[475px] md:tw-min-h-[unset]
      `}
    >
      <div
        className={`
          images tw-absolute tw-left-1/2 tw-top-0 tw-z-[5] tw-flex
          tw-aspect-[350/228] tw-w-[calc(100vw-40px)] -tw-translate-x-1/2
          tw-items-center tw-justify-center

          lg:tw-aspect-[2/1] lg:tw-h-full lg:tw-w-[unset]

          md:tw-bottom-0 md:tw-top-[unset] md:tw-h-[500px] md:tw-translate-y-0

          sm:tw-left-1/2 sm:tw-h-4/5 sm:tw-w-full
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
      <BottomShape />
    </div>
  );
};

export default ShapeBottomImagesWrapper;
