/* eslint-disable @burneeble/burneeble/camel-case-vars */
import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `
            tw-mt-1 tw-flex tw-h-[58px] tw-w-full tw-rounded-md tw-border
            tw-border-input secondary-gradient tw-bg-gradient-to-r tw-px-3
            tw-text-sm tw-shadow-sm tw-transition-colors

            disabled:tw-cursor-not-allowed disabled:tw-opacity-50

            file:tw-border-0 file:tw-bg-gradient-to-r file:tw-text-sm
            file:tw-font-medium file:tw-text-foreground file:secondary-gradient

            focus-visible:tw-outline-none focus-visible:tw-ring-1
            focus-visible:tw-ring-ring

            placeholder:tw-text-muted-foreground
          `,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
