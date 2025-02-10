"use client";

import React from "react";
import { RoundedWrapperProps } from "./RoundedWrapper.types";
import { cn } from "@/lib/utils";

const RoundedWrapper = (props: RoundedWrapperProps) => {
  return (
    <div
      className={`
        rounded-wrapper tw-relative tw-top-[-35px] tw-overflow-hidden
        tw-rounded-t-[30px] tw-border-t-2 tw-border-[var(--primary-light)]
        tw-bg-gradient-to-b tw-from-[var(--secondary-base)]
        tw-to-[var(--secondary-darker)] tw-z-[3] tw-w-full
      `}
    >
      <div
        className={`
          shape tw-absolute tw-left-0 tw-top-0 tw-h-[200vw]
          tw-max-h-[min(170%,1000px)] tw-w-[200vw] tw-max-w-[min(170%,1000px)]
          -tw-translate-x-[50%] -tw-translate-y-[50%]
          tw-bg-[radial-gradient(circle,var(--primary-light)_0%,_rgba(0,0,0,0)_70%)]
          tw-opacity-[.7] tw-blur-[100px]
        `}
      />
      <div
        className={cn(
          `
            content cs-section-structure tw-relative tw-z-[2] tw-flex tw-min-h-0
            tw-flex-col tw-gap-[20px] tw-py-0

            md:tw-gap-[30px]
          `,
          props.className
        )}
      >
        {props.children}
      </div>
    </div>
  );
};

export default RoundedWrapper;
