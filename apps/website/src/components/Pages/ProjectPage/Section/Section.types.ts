import { ImageLayoutModel } from "@/services/ProjectService";

export enum LayoutType {
  FigmaLayout = "figma-layout",
  TextTopCenterImageBottomCenter = "text_top_center-image_bottom_center",
  TextTopStartImageBottomCenter = "text_top_start-image_bottom_center",
  TextTopCenterFullImageBottomCenter = "text_top_center-full_image_bottom_center",
  TextTopStartFullImageBottomCenter = "text_top_start-full_image_bottom_center",
  TextTopCenterComputerDeviceBottomCenterShapeHorizontalBottom = "text_top_center-computer_device_bottom_center-shape_horizontal_bottom",
  TextTopStartComputerDeviceBottomCenterShapeHorizontalBottom = "text_top_start-computer_device_bottom_center-shape_horizontal_bottom",
  TextLeftCenterImageRightCenter = "text_left_center-image_right_center",
  TextLeftStartImageRightCenter = "text_left_start-image_right_center",
  TextRightCenterImageLeftCenter = "text_right_center-image_left_center",
  TextLeftCenterFullImageRightCenter = "text_left_center-full_image_right_center",
  TextLeftStartFullImageRightCenter = "text_left_start-full_image_right_center",
  TextRightCenterFullImageLeftCenter = "text_right_center-full_image_left_center",
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
