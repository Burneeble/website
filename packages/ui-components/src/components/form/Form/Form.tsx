import { useForm } from "react-hook-form";
import { FormProps, InputType } from "./Form.types";
import { FormComponent, FormField } from "../../ui/form";
import React from "react";
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

const Form = (props: FormProps) => {
  //Hooks
  const form = useForm();

  return (
    <FormComponent {...form}>
      <form
        onSubmit={form.handleSubmit(async () => {
          await props.onSubmit(form.getValues());
        })}
        className={"tw-space-y-3"}
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
        <Button type="submit" fit="full" className="tw-mt-0">
          Submit
        </Button>
      </form>
    </FormComponent>
  );
};

export default Form;
