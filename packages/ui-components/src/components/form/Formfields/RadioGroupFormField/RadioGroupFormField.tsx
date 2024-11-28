import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroupFormFieldProps } from "./RadioGroupFormField.types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const RadioGroupFormField = (props: RadioGroupFormFieldProps) => {
  const disabled = props.disabled || false;
  return (
    <>
      <FormItem className="space-y-3">
        <FormLabel>{props.label}</FormLabel>
        <FormControl>
          <RadioGroup
            onValueChange={props.onChange}
            defaultValue={props.value}
            className="flex flex-col space-y-1"
          >
            {props.items.map((item, i) => (
              <FormItem
                key={i}
                className={cn(
                  `
                    tw-relative tw-flex tw-min-h-[58px] tw-flex-row
                    tw-items-center tw-space-x-3 tw-space-y-0 tw-overflow-hidden
                    tw-rounded-lg tw-border tw-p-4 tw-px-3 tw-py-2 tw-shadow-sm
                    tw-outline-none tw-transition-colors
                  `,
                  props.value === item.value
                    ? `
                      tw-border-active tw-bg-gradient-to-r tw-text-body-active
                      secondary-gradient

                      before:tw-absolute before:tw-inset-0 before:tw-z-[1]
                      before:tw-bg-action before:tw-opacity-40
                      before:tw-content-['']
                    `
                    : `tw-border-neutral tw-bg-gradient-to-r secondary-gradient`,
                  disabled === true && "tw-cursor-not-allowed tw-opacity-50"
                )}
              >
                <FormControl>
                  <RadioGroupItem value={item.value} />
                </FormControl>
                <FormLabel className="tw-z-[2]">
                  <span
                    className={cn(
                      "p-small tw-text-body-active",
                      disabled === true && `tw-cursor-not-allowed tw-opacity-50`
                    )}
                  >
                    {item.label}
                  </span>
                </FormLabel>
              </FormItem>
            ))}
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    </>
  );
};
export default RadioGroupFormField;
