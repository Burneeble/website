import { cn } from "@/lib/utils";
import { VerticalShapeProps } from "./VerticalShape.types";

const VerticalShape = (props: VerticalShapeProps) => {
  return (
    <div
      className={cn(
        `
          layout-shape tw-rounded-l-lg tw-top-1/2 -tw-translate-y-1/2 tw-z-[-1]
          tw-left-[calc(100vw-110px)] tw-w-[110px] tw-h-[350px]

          lg:tw-w-[33%] lg:tw-h-[675px] lg:tw-max-w-[unset]

          sm:tw-left-[calc(100vw-250px)] sm:tw-w-[250px] sm:tw-h-[450px]
          sm:tw-aspect-auto
        `,
        props.align === "right"
          ? `lg:tw-left-[calc((100vw/2)-10px-33%)]`
          : `
            lg:tw-right-[calc((100vw/2)-10px-33%)] lg:tw-rounded-r-lg
            lg:tw-rounded-l-none lg:tw-left-[unset]
          `
      )}
    />
  );
};

export default VerticalShape;
