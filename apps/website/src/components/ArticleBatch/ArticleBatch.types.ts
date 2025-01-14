import { ArticlePreviewProps } from "@burneeble/ui-components";

export interface ArticleBatchProps {
  limit: number;
  enableSliderResponsiveMode?: boolean;
  variant?: ArticlePreviewProps["variant"];
}
