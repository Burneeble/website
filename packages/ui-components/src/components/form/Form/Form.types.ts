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
}

export interface FormProps {
  fields: Field[];
  onSubmit: (values: Record<string, string>) => Promise<void> | void;
  className?: string;
}
