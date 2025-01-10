export interface RadioItem {
  value: string;
  label: string;
}

export interface RadioGroupFormFieldProps {
  key: string;
  description?: string;
  items: RadioItem[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  disabled?: boolean;
}
