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
                className="flex items-center space-x-3 space-y-0"
              >
                <FormControl>
                  <RadioGroupItem value={item.value} />
                </FormControl>
                <FormLabel className="font-normal">{item.label}</FormLabel>
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
