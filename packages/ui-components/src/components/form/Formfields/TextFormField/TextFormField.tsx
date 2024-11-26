import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TextFormFieldProps } from "./TextFormField.types";

const TextFormField = (props: TextFormFieldProps) => {
  return (
    <>
      <FormItem key={props.key}>
        <FormLabel>{props.label}</FormLabel>
        <FormControl>
          <Input disabled={props.disabled} placeholder={props.placeholder} />
        </FormControl>
        {props.description && (
          <FormDescription>{props.description}</FormDescription>
        )}
        <FormMessage />
      </FormItem>
    </>
  );
};
export default TextFormField;
