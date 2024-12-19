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
        wrapper tw-relative tw-w-screen tw-aspect-[390/318]

        lg:tw-flex-1 lg:tw-aspect-auto lg:tw-h-screen

        md:tw-aspect-[744/530]
      `}
    >
      <HorizontalShape align={props.side} />
      <div
        className={cn(
          `
            images tw-flex tw-items-center tw-justify-center tw-absolute
            tw-left-1/2 -tw-translate-x-1/2 tw-top-1/2 -tw-translate-y-1/2
            tw-w-[calc(100%-40px)] tw-aspect-[350/230] tw-min-w-[50vw]

            lg:tw-pt-0 lg:tw-h-[95%] lg:tw-translate-x-0 lg:tw-w-auto

            md:tw-pt-[50px]
          `,
          props.side === "right"
            ? `lg:tw-left-0 lg:tw-justify-start`
            : `lg:tw-right-0 lg:tw-left-[unset] lg:tw-justify-end`
        )}
      >
        <ImageLayout {...props} />
      </div>
    </div>
  );
};

export default ShapeHorizontalImagesWrapper;
