import { ButtonProps } from "@/components/ui";
export interface CarouselProps {
  items: JSX.Element[];
  labels?: string[][];
  cta?: ButtonProps;
  raiseInactiveSlides?: boolean;
}
