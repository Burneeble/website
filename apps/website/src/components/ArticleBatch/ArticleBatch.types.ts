import { ArticlePreviewProps } from "@burneeble/ui-components";

export enum ArticleBatchVariant {
  LATEST = 1,
  RELATED,
}

export interface CommonArticleBatchProps {
  limit: number;
  enableSliderResponsiveMode?: boolean;
  variant?: ArticlePreviewProps["variant"];
}
export interface LatestArticleBatchProps {
  type: ArticleBatchVariant.LATEST;
}

export interface RelatedArticleBatchProps {
  type: ArticleBatchVariant.RELATED;
  categorySlug: string;
  articleSlug: string;
}

export type ArticleBatchProps = CommonArticleBatchProps &
  (LatestArticleBatchProps | RelatedArticleBatchProps);
