"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";

const checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      `
        tw-peer tw-z-[2] tw-h-4 tw-w-4 tw-shrink-0 tw-rounded-sm tw-border
        tw-border-neutral tw-shadow

        data-[state=checked]:tw-border-active data-[state=checked]:tw-bg-action
        data-[state=checked]:tw-text-primary-foreground

        disabled:tw-cursor-not-allowed disabled:tw-opacity-50

        focus-visible:tw-border-active focus-visible:tw-outline-none
        focus-visible:tw-ring-1 focus-visible:tw-ring-ring
      `,
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "tw-flex tw-items-center tw-justify-center tw-text-current"
      )}
    >
      <CheckIcon className="tw-h-4 tw-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { checkbox as Checkbox };
