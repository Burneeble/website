import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckboxGroupFormFieldProps } from "./CheckboxGroupFormField.types";
import { Checkbox } from "@/components/ui";
import { cn } from "@/lib/utils";

const CheckboxGroupFormField = (props: CheckboxGroupFormFieldProps) => {
  const disabled = props.disabled || false;
  const value = Array.isArray(props.value) ? props.value : [];

  return (
    <>
      <FormItem className="space-y-3">
        <FormLabel>{props.label}</FormLabel>
        <div className="checkbox-group tw-flex tw-flex-col tw-gap-1">
          {props.items.map((item) => (
            <>
              <FormControl>
                <FormItem
                  className={cn(
                    `
                      tw-relative tw-flex tw-min-h-[58px] tw-flex-row
                      tw-items-center tw-space-x-3 tw-space-y-0
                      tw-overflow-hidden tw-rounded-lg tw-border tw-p-4 tw-px-3
                      tw-py-2 tw-shadow-sm tw-outline-none tw-transition-colors
                    `,
                    value.includes(item.value)
                      ? `
                        tw-border-active tw-bg-gradient-to-r tw-text-body-active
                        secondary-gradient

                        before:tw-absolute before:tw-inset-0 before:tw-z-[1]
                        before:tw-bg-action before:tw-opacity-40
                        before:tw-content-['']
                      `
                      : `
                        tw-border-neutral tw-bg-gradient-to-r secondary-gradient
                      `,
                    disabled === true && "tw-cursor-not-allowed tw-opacity-50"
                  )}
                  key={item.value}
                >
                  <FormControl>
                    <Checkbox
                      disabled={disabled}
                      checked={value?.includes(item.value)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? props.onChange([...value, item.value])
                          : props.onChange(
                              value?.filter(
                                (value: any) => value !== item.value
                              )
                            );
                      }}
                    />
                  </FormControl>
                  <FormLabel>
                    <span
                      className={cn(
                        "p-small tw-text-body-active",
                        disabled === true &&
                          `tw-cursor-not-allowed tw-opacity-50`
                      )}
                    >
                      {item.label}
                    </span>
                  </FormLabel>
                </FormItem>
              </FormControl>
            </>
          ))}
        </div>
        <FormMessage />
      </FormItem>
    </>
  );
};
export default CheckboxGroupFormField;
