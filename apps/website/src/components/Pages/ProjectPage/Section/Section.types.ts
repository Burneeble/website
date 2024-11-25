export enum LayoutType {
  FigmaLayout = "figma-layout",
}

export interface SectionProps {
  layoutType: LayoutType;
  title: string;
  text: string;
}
