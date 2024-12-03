import React from "react";
import { FormProps, InputType } from "./Form.types";
import { FormComponent, FormField } from "../../ui/form";
import { Button } from "@/components/ui";
import {
  TextFormField,
  TextAreaFormField,
  CheckboxFormField,
  CheckboxGroupFormField,
} from "../Formfields";
import RadioGroupFormField from "../Formfields/RadioGroupFormField";
import SelectFormField from "../Formfields/SelectFormField";
import { cn } from "@/lib/utils";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Form = (props: FormProps) => {
  //Hooks
  const formSchema = z.object(
    props.fields.reduce((acc, fieldInfo) => {
      if (fieldInfo.validation) {
        acc[fieldInfo.key] = fieldInfo.validation;
      }
      return acc;
    }, {} as { [key: string]: z.ZodType<any, any> })
  );

  type DefaultValues = {
    [key: string]: string | string[] | boolean;
  };

  const defaultValues: DefaultValues = props.fields.reduce((acc, fieldInfo) => {
    if (fieldInfo.inputType === InputType.checkboxGroup) {
      acc[fieldInfo.key] = [];
    } else if (fieldInfo.inputType === InputType.checkbox) {
      acc[fieldInfo.key] = false;
    } else acc[fieldInfo.key] = "";
    return acc;
  }, {} as DefaultValues);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("data", data);
  }

  return (
    <FormComponent {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"tw-w-full tw-space-y-3"}
      >
        <div className={cn("fields tw-space-y-3", props.className)}>
          {props.fields.map((fieldInfo, i) => {
            const disabled = fieldInfo.disabled || false;
            return (
              <FormField
                key={i}
                control={form.control}
                name={fieldInfo.key}
                className={fieldInfo.className}
                render={({ field }) => (
                  <>
                    {fieldInfo.inputType === InputType.text ? (
                      <TextFormField
                        key={fieldInfo.key}
                        label={fieldInfo.label}
                        placeholder={fieldInfo.placeholder}
                        disabled={disabled}
                        {...field}
                      />
                    ) : fieldInfo.inputType === InputType.textarea ? (
                      <TextAreaFormField
                        key={fieldInfo.key}
                        label={fieldInfo.label}
                        placeholder={fieldInfo.placeholder}
                        disabled={disabled}
                        {...field}
                      />
                    ) : fieldInfo.inputType === InputType.checkbox ? (
                      <CheckboxFormField
                        key={fieldInfo.key}
                        label={fieldInfo.label}
                        description={fieldInfo.description}
                        disabled={disabled}
                        {...field}
                      />
                    ) : fieldInfo.inputType === InputType.checkboxGroup ? (
                      <CheckboxGroupFormField
                        items={fieldInfo.attributes.items}
                        key={fieldInfo.key}
                        label={fieldInfo.label}
                        description={fieldInfo.description}
                        disabled={disabled}
                        {...field}
                      />
                    ) : fieldInfo.inputType === InputType.radioGroup ? (
                      <RadioGroupFormField
                        key={fieldInfo.key}
                        label={fieldInfo.label}
                        description={fieldInfo.description}
                        items={fieldInfo.attributes.items}
                        disabled={disabled}
                        {...field}
                      />
                    ) : fieldInfo.inputType === InputType.select ? (
                      <SelectFormField
                        key={fieldInfo.key}
                        label={fieldInfo.label}
                        description={fieldInfo.description}
                        items={fieldInfo.attributes.items}
                        disabled={disabled}
                        {...field}
                      />
                    ) : null}
                  </>
                )}
              />
            );
          })}
        </div>
        <Button type="submit" fit="full" className="!tw-mt-8">
          Submit
        </Button>
      </form>
    </FormComponent>
  );
};

export default Form;
