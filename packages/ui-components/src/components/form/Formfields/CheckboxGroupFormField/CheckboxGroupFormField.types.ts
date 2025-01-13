import { RadioItem } from "../RadioGroupFormField/RadioGroupFormField.types";

export interface CheckboxItem extends RadioItem {}

export interface CheckboxGroupFormFieldProps {
  key: string;
  description?: string;
  items: CheckboxItem[];
  value: string[] | [];
  onChange: (value: string[]) => void;
  label: string;
  disabled?: boolean;
}
