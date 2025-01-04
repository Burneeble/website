"use client";

import { useEffect, useState } from "react";
import { ArticleBatchProps } from "./ArticleBatch.types";
import { ArticleModel, useArticleService } from "@/services";
import {
  ArticlePreview,
  ArticlePreviewSkeleton,
  NotificationHandler,
  useClientInfoService,
} from "@burneeble/ui-components";

const ArticleBatch = (props: ArticleBatchProps) => {
  //States
  const [articles, setArticles] = useState<ArticleModel[] | null>(null);

  //Hooks
  const { getArticlesWithLimit } = useArticleService();
  const { screen } = useClientInfoService();

  //Effects
  useEffect(() => {
    fetchArticles();
  }, [props.limit]);

  //Methods
  const fetchArticles = async () => {
    try {
      const data = await getArticlesWithLimit(props.limit);
      console.log("Data", data);
      setArticles(data);
    } catch (err) {
      console.log(err);
      NotificationHandler.instance.error("Failed to fetch articles");
    }
  };

  return (
    <>
      {props.enableSliderResponsiveMode && ["sm", "md"].includes(screen) ? (
        <></>
      ) : (
        <div
          className={`
            article-batch tw-flex tw-flex-col tw-gap-[20px] tw-transition-all
            tw-duration-200 tw-ease-in-out tw-relative tw-z-[5]

            lg:tw-grid lg:tw-grid-cols-3

            md:tw-gap-[30px]
          `}
        >
          {articles
            ? articles.map((article, i) => {
                return (
                  <ArticlePreview
                    key={i}
                    thumbnail={article.thumbnail}
                    title={article.title}
                    category={article.categories[0].name}
                    categorySlug={article.categories[0].slug}
                    slug={article.slug}
                    description={article.content}
                  />
                );
              })
            : new Array(props.limit).fill(0).map((_, index) => {
                return <ArticlePreviewSkeleton key={index} />;
              })}
        </div>
      )}
    </>
  );
};

export default ArticleBatch;
