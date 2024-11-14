import { ButtonProps } from "@/components/ui";

export interface Project {
  thumbnail: string;
  categories: string[];
}

export interface CarouselProps {
  projects: Project[];
  cta?: ButtonProps;
}
