/* eslint-disable @burneeble/burneeble/camel-case-vars */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
//TODO change button animation
const buttonVariants = cva(
  `
    tw-relative tw-flex tw-cursor-pointer tw-items-center tw-justify-center
    tw-gap-2 tw-overflow-hidden tw-whitespace-nowrap tw-font-bowlby-one
    tw-text-lg tw-font-medium tw-transition-all

    [&_svg]:tw-pointer-events-none [&_svg]:tw-size-5 [&_svg]:tw-shrink-0

    disabled:tw-pointer-events-none disabled:tw-opacity-50

    focus-visible:tw-outline-none focus-visible:tw-ring-1
    focus-visible:tw-ring-ring

    hover:tw-brightness-110

    lg:tw-text-2xl

    md:tw-text-xl
  `,
  {
    variants: {
      variant: {
        default: `
          tw-border tw-border-primary tw-bg-button-primary tw-text-button
          tw-shadow
        `,

        destructive: `
          tw-border tw-border-error tw-bg-button-error tw-text-button tw-shadow
        `,
        outline: `
          tw-border tw-border-input tw-bg-button-primary tw-text-button
          tw-shadow-sm
        `,
        secondary: `
          tw-border tw-border-tertiary tw-bg-button-secondary tw-text-button
          tw-shadow-sm
        `,
        ghost: `
          tw-text-button

          hover:tw-bg-brown-700/80 hover:tw-text-action
        `,
        link: `
          tw-text-primary tw-underline-offset-4

          hover:tw-underline
        `,
      },
      rounded: {
        default: "tw-rounded-md",
        circle: "tw-rounded-[50%]",
      },
      size: {
        default: "tw-h-12 tw-px-4 tw-py-2",
        sm: "tw-h-8 tw-px-3 tw-text-xs",
        lg: "tw-h-16 tw-px-8",
        icon: "tw-aspect-square tw-h-12 tw-w-12",
        "icon-lg": "tw-aspect-square tw-h-16 tw-w-16",
        "icon-sm": "tw-aspect-square tw-h-8 tw-w-8",
      },
      fit: {
        full: "tw-w-full",
        inline: "tw-w-fit",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
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
    {
      className,
      variant,
      size,
      fit,
      rounded,
      asChild = false,
      customColorString,
      ...props
    },
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
        className={cn(
          buttonVariants({ variant, size, fit, className, rounded })
        )}
        style={customColorClass}
        ref={ref}
        {...props}
      >
        <span
          className={`
            tw-z-[2] tw-flex tw-h-full tw-w-full tw-items-center
            tw-justify-center
          `}
        >
          {props.children}
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
