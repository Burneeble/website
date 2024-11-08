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
            tw-bg-gradient-to-tl tw-to-70%

            before:tw-bg-gradient-to-r before:tw-to-90%
            before:primary-light-gradient-to-secondary
          `,
          active: `
            label-active tw-text-white tw-shadow primary-gradient-to-secondary
            tw-bg-gradient-to-tl tw-to-80%

            before:tw-bg-gradient-to-r before:tw-to-90%
            before:primary-light-gradient-to-secondary
          `,
          disabled: `
            label-disabled tw-text-white tw-shadow-sm secondary-gradient
            tw-bg-gradient-to-tl tw-to-70%

            before:tw-bg-[var(--neutral-default)]
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
