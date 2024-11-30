import { SectionProps } from "../../Section.types";

export interface SubLayoutProps extends Omit<LayoutProps, "imageLayoutInfo"> {
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

export interface LayoutProps extends SectionProps {
  buttonSize: string;
}
