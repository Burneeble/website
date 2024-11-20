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
            tw-flex tw-h-9 tw-w-full tw-rounded-md tw-border tw-border-input
            tw-bg-transparent tw-mt-1 tw-px-3 tw-py-1 tw-text-sm tw-shadow-sm
            tw-transition-colors

            disabled:tw-cursor-not-allowed disabled:tw-opacity-50

            file:tw-border-0 file:tw-text-sm file:tw-font-medium
            file:tw-text-foreground file:tw-bg-transparent

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
