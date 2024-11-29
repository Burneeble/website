"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

const select = SelectPrimitive.Root;

const selectGroup = SelectPrimitive.Group;

const selectValue = SelectPrimitive.Value;

const selectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      `
        p-small tw-relative tw-flex tw-min-h-[58px] tw-w-full tw-flex-row
        tw-items-center tw-justify-between tw-space-x-3 tw-space-y-0
        tw-whitespace-nowrap tw-rounded-lg tw-border tw-border-neutral
        tw-bg-gradient-to-r tw-p-4 tw-px-3 tw-py-2 tw-shadow-sm
        tw-ring-offset-background tw-outline-none tw-transition-colors
        secondary-gradient

        [&>span]:tw-line-clamp-1

        disabled:tw-cursor-not-allowed disabled:tw-italic
        disabled:tw-text-muted-foreground disabled:tw-opacity-50

        focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-ring
      `,
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDownIcon className="tw-h-4 tw-w-4 tw-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
selectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const selectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",
      className
    )}
    {...props}
  >
    <ChevronUpIcon className="tw-h-4 tw-w-4" />
  </SelectPrimitive.ScrollUpButton>
));
selectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const selectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",
      className
    )}
    {...props}
  >
    <ChevronDownIcon className="tw-h-4 tw-w-4" />
  </SelectPrimitive.ScrollDownButton>
));
selectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const selectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        `
          tw-relative tw-z-50 tw-max-h-96 tw-min-w-[8rem] tw-overflow-hidden
          tw-rounded-md tw-border tw-bg-popover tw-text-popover-foreground
          tw-shadow-md

          data-[side=bottom]:tw-slide-in-from-top-2

          data-[side=left]:tw-slide-in-from-right-2

          data-[side=right]:tw-slide-in-from-left-2

          data-[side=top]:tw-slide-in-from-bottom-2

          data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0
          data-[state=closed]:tw-zoom-out-95

          data-[state=open]:tw-animate-in data-[state=open]:tw-fade-in-0
          data-[state=open]:tw-zoom-in-95
        `,
        position === "popper" &&
          `
            data-[side=bottom]:tw-translate-y-1

            data-[side=left]:tw--translate-x-1

            data-[side=right]:tw-translate-x-1

            data-[side=top]:tw--translate-y-1
          `,
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "tw-p-1",
          position === "popper" &&
            `
              tw-h-[var(--radix-select-trigger-height)] tw-w-full
              tw-min-w-[var(--radix-select-trigger-width)]
            `
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectPrimitive.SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
selectContent.displayName = SelectPrimitive.Content.displayName;

const selectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("p-small tw-px-2 tw-py-1.5", className)}
    {...props}
  />
));
selectLabel.displayName = SelectPrimitive.Label.displayName;

const selectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      `
        p-small tw-relative tw-flex tw-w-full tw-cursor-pointer tw-select-none
        tw-items-center tw-rounded-sm tw-bg-neutral tw-py-1.5 tw-pl-2 tw-pr-8
        tw-text-body-active tw-outline-none

        [&:not(:first-child)]:tw-mt-1

        before:tw-inset-0 before:tw-z-[1] before:tw-opacity-40
        before:tw-content-['']

        data-[disabled]:tw-pointer-events-none data-[disabled]:tw-italic
        data-[disabled]:tw-opacity-50

        focus:tw-border-active focus:tw-bg-gradient-to-r
        focus:tw-text-body-active focus:before:tw-absolute
        focus:before:tw-bg-action focus:secondary-gradient
      `,
      className
    )}
    {...props}
  >
    <span
      className={`
        tw-absolute tw-right-2 tw-z-[2] tw-flex tw-h-3.5 tw-w-3.5
        tw-items-center tw-justify-center
      `}
    >
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="tw-h-4 tw-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText className="tw-z-[2]">
      {children}
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
selectItem.displayName = SelectPrimitive.Item.displayName;

const selectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("tw-mx-1 tw-my-1 tw-h-px tw-bg-muted", className)}
    {...props}
  />
));
selectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  select as Select,
  selectGroup as SelectGroup,
  selectValue as SelectValue,
  selectTrigger as SelectTrigger,
  selectContent as SelectContent,
  selectLabel as SelectLabel,
  selectItem as SelectItem,
  selectSeparator as SelectSeparator,
  selectScrollUpButton as SelectScrollUpButton,
  selectScrollDownButton as SelectScrollDownButton,
};
