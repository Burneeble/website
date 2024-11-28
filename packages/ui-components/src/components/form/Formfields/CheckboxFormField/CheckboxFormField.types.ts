export interface CheckboxFormFieldProps {
  key: string;
  description?: string;
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
  disabled?: boolean;
}
