/* eslint-disable @burneeble/burneeble/camel-case-vars */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "tw-cursor-pointer tw-font-bowlby-one tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-whitespace-nowrap tw-rounded-md tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-font-medium tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-1 focus-visible:tw-ring-ring disabled:tw-pointer-events-none disabled:tw-opacity-50 [&_svg]:tw-pointer-events-none [&_svg]:tw-size-4 [&_svg]:tw-shrink-0 hover:tw-brightness-90 ",
  {
    variants: {
      variant: {
        default:
          "tw-bg-button-primary tw-text-white tw-shadow tw-border tw-border-primary",

        destructive:
          "tw-bg-button-error tw-bg-button-text tw-shadow tw-border tw-border-error",
        outline: "tw-border tw-border-input tw-bg-button-primary tw-shadow-sm",
        secondary:
          "tw-bg-button-secondary tw-text-white tw-shadow-sm tw-border tw-border-tertiary",
        ghost: "hover:tw-bg-accent hover:tw-text-accent-foreground",
        link: "tw-text-primary tw-underline-offset-4 hover:tw-underline",
      },
      size: {
        default: "tw-h-12 tw-px-4 tw-py-2",
        sm: "tw-h-8 tw-rounded-md tw-px-3 tw-text-xs",
        lg: "tw-h-16 tw-rounded-md tw-px-8",
        icon: "tw-h-12 tw-w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  customColorString?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, customColorString, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const customColorClass = customColorString
      ? {
          backgroundColor: customColorString,
          borderColor: customColorString,
        }
      : {};
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={customColorClass}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
