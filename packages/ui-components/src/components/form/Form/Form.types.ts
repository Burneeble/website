import { z } from "zod";

export enum InputType {
  text = "text",
  textarea = "textarea",
  select = "select",
  radioGroup = "radioGroup",
  checkbox = "checkbox",
  checkboxGroup = "checkboxGroup",
}

export interface Field {
  key: string;
  label: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
  inputType: InputType;
  className?: string;
  attributes?: any;
  validation?: z.ZodType<any, any>;
}

export interface FormProps {
  fields: Field[];
  onSubmit: (values: Record<string, string>) => Promise<void> | void;
  // onSuccess?: (success: boolean) => void;
  showSuccessButton?: boolean;
  className?: string;
  stickySubmit?: boolean;
}
