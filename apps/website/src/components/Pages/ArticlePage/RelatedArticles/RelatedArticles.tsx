"use client";

import ArticleBatch, { ArticleBatchVariant } from "@/components/ArticleBatch";
import { RelatedArticlesProps } from "./RelatedArticles.types";

const RelatedArticles = (props: RelatedArticlesProps) => {
  return (
    <section
      className={`
        cs-section-structure cs-gap-between-content cs-bottom-padding-for-footer
        related-articles tw-relative tw-flex tw-w-screen tw-max-w-[unset]
        tw-flex-col tw-items-center tw-justify-center tw-border-t-2
        tw-border-solid tw-border-white tw-bg-gradient-to-r tw-min-h-fit
      `}
    >
      <h2 className="title tw-text-center">Related Articles</h2>
      <div
        className={`articles-wrapper tw-w-full tw-max-w-screen-xl tw-px-[30px]`}
      >
        <ArticleBatch
          type={ArticleBatchVariant.RELATED}
          limit={3}
          categorySlug={props.categorySlug}
          articleSlug={props.articleSlug}
          enableSliderResponsiveMode
        />
      </div>
    </section>
  );
};

export default RelatedArticles;
