import { ImageLayoutModel } from "@/services/ProjectService";

export enum LayoutType {
  FigmaLayout = "figma-layout",
}

export enum ImageLayoutType {
  FigmaImageLayout = "figma-image-layout",
}

export interface SectionProps {
  layoutType: LayoutType;
  title: string;
  text: string;
  imageLayoutType: ImageLayoutType;
  imageLayoutInfo: ImageLayoutModel;
}
