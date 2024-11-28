import { ImageLayoutModel } from "@/services/ProjectService";

export enum LayoutType {
  FigmaLayout = "figma-layout",
  TextTopCenterImageBottomCenter = "text_top_center-image_bottom_center",
  TextTopStartImageBottomCenter = "text_top_start-image_bottom_center",
  TextTopCenterFullImageBottomCenter = "text_top_center-full_image_bottom_center",
  TextTopStartFullImageBottomCenter = "text_top_start-full_image_bottom_center",
  TextTopCenterShapeHorizontalBottom = "text_top_center-shape_horizontal_bottom",
  TextTopStartShapeHorizontalBottom = "text_top_start-shape_horizontal_bottom",
  TextLeftCenterImageRightCenter = "text_left_center-image_right_center",
  TextLeftStartImageRightCenter = "text_left_start-image_right_center",
  TextRightCenterImageLeftCenter = "text_right_center-image_left_center",
  TextLeftCenterFullImageRightCenter = "text_left_center-full_image_right_center",
  TextLeftStartFullImageRightCenter = "text_left_start-full_image_right_center",
  TextRightCenterFullImageLeftCenter = "text_right_center-full_image_left_center",
  TextLeftCenterImageRightCenterShapeVerticalRight = "text_left_center-image_right_center-shape_vertical-right",
  TextLeftStartImageRightCenterShapeVerticalRight = "text_left_start-image_right_center-shape_vertical-right",
  TextRightCenterImageLeftCenterShapeVerticalLeft = "text_right_center-image_left_center-shape_vertical-left",
  TextRightCenterShapeHorizontalRight = "text_right_center-shape_horizontal_right",
  TextRightStartShapeHorizontalRight = "text_right_start-shape_horizontal_right",
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
