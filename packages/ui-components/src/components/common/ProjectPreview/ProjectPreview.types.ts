import { Dispatch, SetStateAction } from "react";

/**
 * ProjectPreview props
 */
export interface ProjectPreviewProps {
  thumbnail: string;
  title: string;
  categories: string[];
  query?: string;
  activeCategories: string[];
  setActiveCategories: Dispatch<SetStateAction<string[]>>;
}
