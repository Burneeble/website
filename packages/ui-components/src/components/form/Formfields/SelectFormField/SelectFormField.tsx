import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SelectFormFieldProps } from "./SelectFormField.types";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectFormField = (props: SelectFormFieldProps) => {
  const disabled = props.disabled || false;
  const placeholder = props.placeholder || "Select an option";

  return (
    <>
      <FormItem>
        <FormLabel>{props.label}</FormLabel>
        <Select onValueChange={props.onChange} defaultValue={props.value}>
          <FormControl>
            <SelectTrigger
              className={cn(
                props.value === undefined
                  ? "tw-text-body"
                  : `tw-text-body-active`
              )}
              disabled={disabled}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent
            className={`
              secondary-gradient tw-z-[100] tw-border-neutral
              tw-bg-gradient-to-r
            `}
          >
            {props.items.map((item, i) => (
              <SelectItem
                key={i}
                value={item.value}
                disabled={item.disabled || false}
              >
                <span className="tw-relative tw-z-[2]"> {item.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormDescription>{props.description}</FormDescription>
        <FormMessage />
      </FormItem>
    </>
  );
};
export default SelectFormField;
