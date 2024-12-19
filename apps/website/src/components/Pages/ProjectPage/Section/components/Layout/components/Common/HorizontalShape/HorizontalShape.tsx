import { cn } from "@/lib/utils";
import { HorizontalShapeProps } from "./HorizontalShape.types";

const HorizontalShape = (props: HorizontalShapeProps) => {
  return (
    <div
      className={cn(
        `
          layout-shape tw-rounded-l-lg tw-top-0 tw-h-full tw-right-0 tw-z-[-1]
          tw-w-1/2

          lg:tw-w-[50vw] lg:tw-h-[372px] lg:tw-top-0

          sm:tw-h-auto sm:tw-w-[75%] sm:tw-aspect-[544/338]
        `,
        props.align === "right"
          ? `lg:tw-right-[unset] lg:tw-left-0`
          : `lg:tw-right-0 lg:tw-rounded-r-lg lg:tw-rounded-l-none`
      )}
    />
  );
};

export default HorizontalShape;
