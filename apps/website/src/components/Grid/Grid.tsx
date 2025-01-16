"use client";

import { GridProps } from "./Grid.types";

const Grid = (props: GridProps) => {
  return (
    <div
      className={`
        grid tw-flex tw-flex-col tw-gap-[20px] tw-transition-all tw-duration-200
        tw-ease-in-out

        lg:tw-grid lg:tw-grid-cols-3

        md:tw-gap-[30px]
      `}
    >
      {props.children}
    </div>
  );
};

export default Grid;
