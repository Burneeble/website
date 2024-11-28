export interface CheckboxFormFieldProps {
  key: string;
  description?: string;
  value: boolean | string;
  onChange: (value: boolean | string) => void;
  label: string;
  disabled?: boolean;
}
