export enum InputType {
  text = "text",
  textarea = "textarea",
  select = "select",
  radio = "radio",
  checkbox = "checkbox",
}

export interface Field {
  key: string;
  label: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
  inputType: InputType;
  attributes?: any;
}

export interface FormProps {
  fields: Field[];
  onSubmit: (values: Record<string, string>) => Promise<void> | void;
}
