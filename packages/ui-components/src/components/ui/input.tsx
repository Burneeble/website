/* eslint-disable @burneeble/burneeble/camel-case-vars */
import * as React from "react";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    //handle input to add custom class when input is empty or not to add a different border style
    useEffect(() => {
      const handleInput = () => {
        if (inputRef.current) {
          if (inputRef.current.value === "") {
            inputRef.current.classList.add("custom-placeholder-border");
          } else {
            inputRef.current.classList.remove("custom-placeholder-border");
          }
        }
      };

      if (inputRef.current) {
        inputRef.current.addEventListener("input", handleInput);
        handleInput();
      }

      return () => {
        if (inputRef.current) {
          inputRef.current.removeEventListener("input", handleInput);
        }
      };
    }, []);

    return (
      <input
        type={type}
        className={cn(
          `
            p-small input-placeholder tw-flex tw-h-[58px] tw-w-full
            tw-rounded-lg tw-text-body-active tw-border secondary-gradient
            tw-border-tertiary tw-bg-gradient-to-r tw-px-3 tw-shadow-sm
            tw-outline-none tw-transition-colors

            disabled:tw-cursor-not-allowed disabled:tw-opacity-50

            file:tw-border-0 file:tw-bg-gradient-to-r file:tw-font-medium
            file:tw-text-foreground file:p-small file:secondary-gradient

            focus-visible:tw-border-active focus-visible:tw-outline-none
            focus-visible:tw-ring-1 focus-visible:tw-ring-ring

            placeholder:tw-italic placeholder:tw-text-muted-foreground
          `,
          className
        )}
        ref={inputRef}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
