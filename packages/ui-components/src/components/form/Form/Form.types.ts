export interface Field {
  key: string;
  label: string;
  placeholder?: string;
  description?: string;
}

export interface FormProps {
  fields: Field[];
  onSubmit: (values: Record<string, string>) => Promise<void> | void;
}
