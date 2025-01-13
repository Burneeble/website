"use client";

import { cn } from "@/lib/utils";
import ImageLayout from "../../../ImageLayout";
import { SideImagesWrapperProps } from "./SideImagesWrapper.types";
import { ImageLayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";
import { useClientInfoService } from "@burneeble/ui-components";

const SideImagesWrapper = (props: SideImagesWrapperProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={cn(
        `
          images tw-flex tw-items-center tw-justify-center tw-w-full

          lg:tw-max-w-[630px] lg:tw-flex-1
        `,
        props.imageLayoutType === ImageLayoutType.LaptopImageLayout
          ? `tw-h-[410px]`
          : `tw-aspect-square tw-max-w-[454px]`
      )}
    >
      <ImageLayout
        {...props}
        mainAxis={
          props.imageLayoutType === ImageLayoutType.LaptopImageLayout &&
          ["sm", "md"].includes(screen)
            ? "height"
            : "width"
        }
      />
    </div>
  );
};

export default SideImagesWrapper;
