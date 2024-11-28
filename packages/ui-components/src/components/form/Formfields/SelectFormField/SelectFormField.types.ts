export interface SelectItem {
  value: string;
  label: string;
}

export interface SelectFormFieldProps {
  key: string;
  description?: string;
  items: SelectItem[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  disabled?: boolean;
}
