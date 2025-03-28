import { cn } from "@/lib/utils";
import { VerticalShape2Props } from "./VerticalShape2.types";

const VerticalShape2 = (props: VerticalShape2Props) => {
  return (
    <div
      className={cn(
        `
          layout-shape tw-right-0 tw-top-1/2 tw-z-[-1] tw-h-full tw-w-[50vw]
          -tw-translate-y-1/2 tw-rounded-l-lg

          lg:tw-h-full lg:tw-w-[74%]

          md:tw-h-[600px] md:tw-w-[50vw]
        `,
        props.align === "right"
          ? `lg:tw-left-[calc((100vw/2)-10px-74%)] lg:tw-right-[unset]`
          : `
            lg:tw-right-[calc((100vw/2)-10px-74%)] lg:tw-rounded-l-none
            lg:tw-rounded-r-lg
          `
      )}
    />
  );
};

export default VerticalShape2;
