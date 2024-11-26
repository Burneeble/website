import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TextAreaFormFieldProps } from "./TextAreaFormField.types";
import { Textarea } from "@/components/ui/textarea";

const TextAreaFormField = (props: TextAreaFormFieldProps) => {
  return (
    <>
      <FormItem>
        <FormLabel>{props.label}</FormLabel>
        <FormControl>
          <Textarea placeholder={props.placeholder} />
        </FormControl>
        {props.description && (
          <FormDescription>{props.description}</FormDescription>
        )}
        <FormMessage />
      </FormItem>
    </>
  );
};
export default TextAreaFormField;
