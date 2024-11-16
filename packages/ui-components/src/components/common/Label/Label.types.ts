/**
 * Label props
 */
export interface LabelProps {
  text: string;
  variant?: "default" | "active" | "disabled" | null;
  size?: "default" | "sm" | "lg" | null;
  className?: string | null;
  onClick?: (e?: any) => void;
}
