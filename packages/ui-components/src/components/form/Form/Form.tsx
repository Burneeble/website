import { useForm } from "react-hook-form";
import { FormProps } from "./Form.types";
import {
  FormComponent,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import React from "react";
import { Button, Input } from "@/components/ui";

const Form = (props: FormProps) => {
  //Hooks
  const form = useForm();

  return (
    <FormComponent {...form}>
      <form
        onSubmit={form.handleSubmit(async () => {
          await props.onSubmit(form.getValues());
        })}
        className="space-y-8"
      >
        {props.fields.map((fieldInfo, i) => {
          return (
            <FormField
              key={i}
              control={form.control}
              name={fieldInfo.key}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{fieldInfo.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={fieldInfo.placeholder} {...field} />
                  </FormControl>
                  {fieldInfo.description && (
                    <FormDescription>{fieldInfo.description}</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}
        <Button type="submit" fit="full">
          Submit
        </Button>
      </form>
    </FormComponent>
  );
};

export default Form;
