import { cn } from "@/lib/utils";
import ImageLayout from "../../../ImageLayout";
import { HorizontalShape } from "../../Shapes";
import { ShapeHorizontalImagesWrapperProps } from "./ShapeHorizontalImagesWrapper.types";

const ShapeHorizontalImagesWrapper = (
  props: ShapeHorizontalImagesWrapperProps
) => {
  return (
    <div
      className={`
        wrapper tw-relative tw-aspect-[400/300] tw-w-screen

        lg:tw-aspect-auto lg:tw-h-screen lg:tw-flex-1

        md:tw-aspect-[744/530]
      `}
    >
      <HorizontalShape align={props.side} />
      <div
        className={cn(
          `
            images tw-absolute tw-left-1/2 tw-top-1/2 tw-flex
            tw-aspect-[350/230] tw-w-[calc(100%-40px)] tw-min-w-[50vw]
            -tw-translate-x-1/2 -tw-translate-y-1/2 tw-items-center
            tw-justify-center

            lg:tw-h-[95%] lg:tw-w-auto lg:tw-translate-x-0 lg:tw-pt-0

            md:tw-pt-[50px]
          `,
          props.side === "right"
            ? `lg:tw-left-0 lg:tw-justify-start`
            : `lg:tw-left-[unset] lg:tw-right-0 lg:tw-justify-end`
        )}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default ShapeHorizontalImagesWrapper;
