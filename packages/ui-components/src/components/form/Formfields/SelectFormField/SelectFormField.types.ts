export interface SelectItem {
  value: string;
  label: string;
  disabled: boolean;
}

export interface SelectFormFieldProps {
  key: string;
  placeholder?: string;
  description?: string;
  items: SelectItem[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  disabled?: boolean;
}
