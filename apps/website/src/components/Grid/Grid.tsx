"use client";

import { cn } from "@/lib/utils";
import { GridProps } from "./Grid.types";

const Grid = (props: GridProps) => {
  return (
    <div
      className={cn(
        `
          grid tw-flex tw-w-full tw-flex-col tw-gap-[20px] tw-transition-all
          tw-duration-200 tw-ease-in-out

          lg:tw-grid lg:tw-grid-cols-3

          md:tw-gap-[30px] md:tw-grid md:tw-grid-cols-2
        `,
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default Grid;
