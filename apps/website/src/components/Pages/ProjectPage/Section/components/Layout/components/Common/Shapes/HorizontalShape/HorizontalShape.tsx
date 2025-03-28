import { cn } from "@/lib/utils";
import { HorizontalShapeProps } from "./HorizontalShape.types";

const HorizontalShape = (props: HorizontalShapeProps) => {
  return (
    <div
      className={cn(
        `
          layout-shape tw-right-0 tw-top-0 tw-z-[-1] tw-h-full tw-w-[50vw]
          tw-rounded-l-lg

          lg:tw-top-0 lg:tw-h-[372px] lg:tw-w-[50vw]

          sm:tw-aspect-[544/338] sm:tw-h-auto sm:tw-w-[75%]
        `,
        props.align === "right"
          ? `lg:tw-left-0 lg:tw-right-[unset]`
          : `lg:tw-right-0 lg:tw-rounded-l-none lg:tw-rounded-r-lg`
      )}
    />
  );
};

export default HorizontalShape;
