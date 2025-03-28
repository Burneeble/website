import { cn } from "@/lib/utils";
import ImageLayout from "../../../ImageLayout";
import { VerticalShape } from "../../Shapes";
import { ShapeVerticalImagesWrapperProps } from "./ShapeVerticalImagesWrapper.types";
import { ImageLayoutType } from "@/components/Pages/ProjectPage/Section/Section.types";

const ShapeVerticalImagesWrapper = (props: ShapeVerticalImagesWrapperProps) => {
  return (
    <div
      className={`
        wrapper tw-relative tw-flex tw-aspect-[400/300] tw-w-screen
        tw-items-center tw-justify-center

        lg:tw-h-[675px] lg:tw-flex-1

        md:tw-aspect-auto

        sm:tw-h-[450px]
      `}
    >
      <VerticalShape align={props.side} />
      <div
        className={cn(
          `
            images tw-relative tw-mx-[20px] tw-flex tw-w-full tw-max-w-[454px]
            tw-items-center tw-justify-center

            lg:tw-mx-0 lg:tw-max-w-[630px] lg:tw-flex-1

            sm:tw-aspect-[630/532]
          `,
          props.imageLayoutType === ImageLayoutType.VeryLargeImageLayout
            ? `tw-aspect-[350/230]`
            : `tw-aspect-[630/532]`
        )}
      >
        <ImageLayout {...props} mainAxis="width" />
      </div>
    </div>
  );
};

export default ShapeVerticalImagesWrapper;
