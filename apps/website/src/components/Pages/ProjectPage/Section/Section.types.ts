import { ImageLayoutModel } from "@/services/ProjectService";

export enum LayoutType {
  FigmaLayout = "figma-layout",
  TextTopCenterImageBottomCenter = "text_top_center-image_bottom_center",
  TextTopStartImageBottomCenter = "text_top_start-image_bottom_center",
  TextTopCenterFullImageBottomCenter = "text_top_center-full_image_bottom_center",
  TextTopStartFullImageBottomCenter = "text_top_start-full_image_bottom_center",
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
