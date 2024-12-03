/* eslint-disable @burneeble/burneeble/camel-case-vars */
import * as React from "react";

import { cn } from "@/lib/utils";
import { useCustomPlaceholder } from "@/hooks/useCustomPlaceholderStyle";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }) => {
    const inputRef = useCustomPlaceholder<HTMLInputElement>();

    return (
      <input
        type={type}
        className={cn(
          `
            p-small tw-flex tw-h-[50px] tw-w-full tw-rounded-lg tw-border
            tw-bg-gradient-to-r tw-px-3 tw-text-body-active tw-shadow-sm
            tw-outline-none tw-transition-colors secondary-gradient

            disabled:tw-cursor-not-allowed disabled:tw-opacity-50

            file:tw-border-0 file:tw-bg-gradient-to-r file:tw-font-medium
            file:tw-text-foreground file:p-small file:secondary-gradient

            focus-visible:tw-border-active focus-visible:tw-ring-1
            focus-visible:tw-outline-none focus-visible:tw-ring-ring

            placeholder:tw-italic placeholder:tw-text-muted-foreground

            sm:tw-h-[58px]
          `,
          className,
          props["aria-invalid"] === true
            ? "tw-border-error"
            : `input-placeholder tw-border-tertiary`
        )}
        ref={inputRef}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
