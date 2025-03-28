import { cn } from "@/lib/utils";
import ImageLayout from "../../../ImageLayout";
import { SideFullImagesWrapperProps } from "./SideFullImagesWrapper.types";
import { ImageLayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";
import { useClientInfoService } from "@burneeble/ui-components";

const SideFullImagesWrapper = (props: SideFullImagesWrapperProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={cn(
        `
          wrapper tw-relative tw-w-full

          lg:tw-h-full lg:tw-w-auto lg:tw-max-w-[630px] lg:tw-flex-1
        `,
        props.imageLayoutType === ImageLayoutType.LaptopImageLayout
          ? `tw-h-[410px]`
          : `tw-aspect-square tw-max-w-[454px]`
      )}
    >
      <div
        className={cn(
          `
            images tw-absolute tw-top-1/2 tw-flex tw-w-full -tw-translate-y-1/2
            tw-items-center tw-justify-center

            lg:tw-w-[calc(100vw/2-20px)] lg:tw-max-w-[unset]
          `,
          props.side === `right` ? `tw-left-0` : `tw-right-0`,
          props.imageLayoutType === ImageLayoutType.LaptopImageLayout
            ? `tw-h-full`
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
    </div>
  );
};

export default SideFullImagesWrapper;
