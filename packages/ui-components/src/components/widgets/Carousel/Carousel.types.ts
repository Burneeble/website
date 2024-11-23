import { ButtonProps } from "@/components/ui";

export interface Project {
  thumbnail: string;
  categories: string[];
  description: string;
  title: string;
  projectUrl: string;
}

export interface CarouselProps {
  projects: Project[];
  cta?: ButtonProps;
}
