import { cn } from "@/lib/utils";
import { VerticalShapeProps } from "./VerticalShape.types";

const VerticalShape = (props: VerticalShapeProps) => {
  return (
    <div
      className={cn(
        `
          layout-shape tw-left-[calc(100vw-110px)] tw-top-1/2 tw-z-[-1]
          tw-h-[350px] tw-w-[110px] -tw-translate-y-1/2 tw-rounded-l-lg

          lg:tw-h-[675px] lg:tw-w-[33%] lg:tw-max-w-[unset]

          sm:tw-left-[calc(100vw-250px)] sm:tw-aspect-auto sm:tw-h-[450px]
          sm:tw-w-[250px]
        `,
        props.align === "right"
          ? `lg:tw-left-[calc((100vw/2)-10px-33%)]`
          : `
            lg:tw-left-[unset] lg:tw-right-[calc((100vw/2)-10px-33%)]
            lg:tw-rounded-l-none lg:tw-rounded-r-lg
          `
      )}
    />
  );
};

export default VerticalShape;
