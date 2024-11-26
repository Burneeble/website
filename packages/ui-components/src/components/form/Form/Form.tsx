import { useForm } from "react-hook-form";
import { FormProps, InputType } from "./Form.types";
import { FormComponent, FormField } from "../../ui/form";
import React from "react";
import { Button } from "@/components/ui";
import { TextFormField, TextAreaFormField } from "../Formfields";

const Form = (props: FormProps) => {
  //Hooks
  const form = useForm();

  return (
    <FormComponent {...form}>
      <form
        onSubmit={form.handleSubmit(async () => {
          await props.onSubmit(form.getValues());
        })}
        className="tw-space-y-3"
      >
        {props.fields.map((fieldInfo, i) => {
          return (
            <FormField
              key={i}
              control={form.control}
              name={fieldInfo.key}
              render={({ field }) => (
                <>
                  {fieldInfo.inputType === InputType.text ? (
                    <TextFormField
                      key={fieldInfo.key}
                      label={fieldInfo.label}
                      placeholder={fieldInfo.placeholder}
                      {...field}
                    />
                  ) : fieldInfo.inputType === InputType.textarea ? (
                    <TextAreaFormField
                      key={fieldInfo.key}
                      label={fieldInfo.label}
                      placeholder={fieldInfo.placeholder}
                      {...field}
                    />
                  ) : null}
                </>
              )}
            />
          );
        })}

        <Button type="submit" fit="full" className="tw-mt-0">
          Submit
        </Button>
      </form>
    </FormComponent>
  );
};

export default Form;
