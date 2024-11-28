"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { DotFilledIcon } from "@radix-ui/react-icons";
const radioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("tw-grid tw-gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
radioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const radioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        `
          tw-z-[2] tw-aspect-square tw-h-4 tw-w-auto tw-overflow-hidden
          tw-rounded-full tw-border tw-border-active tw-text-primary tw-shadow

          disabled:tw-cursor-not-allowed disabled:tw-opacity-50

          focus-visible:tw-ring-1 focus-visible:tw-ring-ring

          focus:tw-outline-none
        `,
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        className={`
          tw-z-[2] tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center
          tw-bg-white
        `}
      >
        <DotFilledIcon className={`tw-h-3.5 tw-w-3.5 tw-fill-primary`} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
radioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { radioGroup as RadioGroup, radioGroupItem as RadioGroupItem };
