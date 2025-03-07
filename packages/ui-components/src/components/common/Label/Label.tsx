import React from "react";
import { LabelProps } from "./Label.types";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Label = (props: LabelProps) => {
  const labelVariants = cva(
    `
      tw-m-[0.1rem] tw-inline-flex tw-items-center tw-justify-center
      tw-whitespace-nowrap tw-rounded-[8px] tw-px-[10px] tw-py-[2px]
      tw-font-bowlby-one
    `,
    {
      variants: {
        variant: {
          default: `
            label-default tw-text-white tw-shadow secondary-gradient
            tw-bg-gradient-to-tl tw-to-70%
          `,
          active: `
            label-active tw-text-white tw-shadow primary-gradient-to-secondary
            tw-bg-gradient-to-tl tw-to-80%
          `,
          disabled: `
            label-disabled tw-text-white tw-shadow-sm secondary-gradient
            tw-bg-gradient-to-tl tw-to-70%
          `,
        },
        size: {
          default: "tw-h-[40px] tw-text-xl", //small 20px
          sm: "tw-h-[31px] tw-px-3 tw-text-sm", //smaller 14px
          md: "tw-h-[31px] tw-px-3 tw-text-lg", // 18px
          lg: "tw-h-[40px] tw-px-8 tw-text-2xl", //default 24px
        },
        clickable: {
          true: "tw-cursor-pointer",
          false: "tw-cursor-default",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
        clickable: false,
      },
    }
  );

  return (
    <div
      className={cn(
        `
          label-wrapper tw-inline-flex tw-w-fit tw-items-center
          tw-justify-center tw-rounded-[9px]
        `,
        (props.variant === "default" || !props.variant) &&
          "tw-bg-gradient-to-r tw-to-90% primary-light-gradient-to-secondary",
        props.variant === "active" &&
          `tw-bg-gradient-to-r tw-to-90% primary-light-gradient-to-secondary`,
        props.variant === "disabled" && "tw-bg-[var(--neutral-default)]"
      )}
    >
      <label
        className={cn(
          "label",
          labelVariants({
            variant: props.variant,
            size: props.size,
            className: props.className,
          }),
          "tw-relative",
          props.onClick && "tw-cursor-pointer"
        )}
        onClick={(e) => {
          if (props.onClick) {
            props.onClick(e);
          }
        }}
      >
        {props.text}
      </label>
    </div>
  );
};

export default Label;
