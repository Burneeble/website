import React from "react";
import { LabelProps } from "./Label.types";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Label = (props: LabelProps) => {
  const labelVariants = cva(
    `
      tw-m-[0.1rem] tw-inline-flex tw-cursor-pointer tw-items-center
      tw-justify-center tw-whitespace-nowrap tw-rounded-[8px] tw-px-[10px]
      tw-py-[2px] tw-font-bowlby-one
    `,
    {
      variants: {
        variant: {
          default: `
            label-default tw-text-white tw-shadow secondary-gradient
            tw-bg-gradient-to-l
          `,
          active: `
            label-active tw-text-white tw-shadow tertiary-gradient
            tw-bg-gradient-to-r tw-to-60%
          `,
          disabled: `
            label-disabled tw-text-white tw-shadow-sm secondary-gradient
            tw-bg-gradient-to-l
          `,
        },
        size: {
          default: "tw-h-[40px] tw-text-[20px]",
          sm: "tw-h-[31px] tw-px-3 tw-text-[20px]",
          lg: "tw-h-[40px] tw-px-8 tw-text-[24px]",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );

  return (
    <label
      className={cn(
        "label",
        labelVariants({
          variant: props.variant,
          size: props.size,
          className: props.className,
        }),
        "tw-relative"
      )}
    >
      {props.text}
    </label>
  );
};

export default Label;
