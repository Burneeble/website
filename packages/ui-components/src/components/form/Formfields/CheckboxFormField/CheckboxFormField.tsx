import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckboxFormFieldProps } from "./CheckboxFormField.types";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
const CheckboxFormField = (props: CheckboxFormFieldProps) => {
  const disabled = props.disabled || false;
  return (
    <>
      <FormItem
        key={props.key}
        className={cn(
          `
            tw-relative tw-flex tw-min-h-[50px] tw-flex-row tw-items-center
            tw-space-x-3 tw-space-y-0 tw-overflow-hidden tw-rounded-lg tw-border
            tw-p-4 tw-px-3 tw-py-2 tw-shadow-sm tw-outline-none
            tw-transition-colors

            sm:tw-min-h-[58px]
          `,
          props.value === true
            ? `
              tw-border-active tw-bg-gradient-to-r tw-text-body-active
              secondary-gradient

              before:tw-absolute before:tw-inset-0 before:tw-z-[1]
              before:tw-bg-action before:tw-opacity-40 before:tw-content-['']
            `
            : `tw-border-neutral tw-bg-gradient-to-r secondary-gradient`,
          disabled === true && "tw-cursor-not-allowed tw-opacity-50"
        )}
      >
        <FormControl>
          <Checkbox
            booleanType={true}
            disabled={disabled}
            checked={props.value}
            onCheckedChange={props.onChange}
          />
        </FormControl>
        <div
          className={`
            tw-flex tw-flex-col tw-items-start tw-justify-start tw-space-y-1
            p-small
          `}
        >
          <FormLabel className="tw-z-[2]">
            <span
              className={cn(
                "p-small tw-text-body-active",
                disabled === true && `tw-cursor-not-allowed tw-opacity-50`
              )}
            >
              {props.label}
            </span>
          </FormLabel>
          {props.description && (
            <FormDescription>{props.description}</FormDescription>
          )}
        </div>
        <FormMessage />
      </FormItem>
    </>
  );
};
export default CheckboxFormField;
