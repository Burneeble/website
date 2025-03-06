"use client";

import { useEffect, useState } from "react";
import { ArticleBatchProps, ArticleBatchVariant } from "./ArticleBatch.types";
import { ArticleModel, useArticleService } from "@/services";
import {
  ArticlePreview,
  ArticlePreviewSkeleton,
  Carousel,
  NotificationHandler,
  useClientInfoService,
} from "@burneeble/ui-components";
import { useRouter } from "next/navigation";

const ArticleBatch = (props: ArticleBatchProps) => {
  //States
  const [articles, setArticles] = useState<ArticleModel[] | null>(null);

  //Hooks
  const { getArticlesWithLimit, getRelatedArticles } = useArticleService();
  const { screen, width } = useClientInfoService();
  const router = useRouter();

  //Effects
  useEffect(() => {
    fetchArticles();
  }, [props.limit]);

  //Methods
  const fetchArticles = async () => {
    try {
      let data: ArticleModel[] | null = null;

      switch (props.type) {
        case ArticleBatchVariant.RELATED:
          data = await getRelatedArticles(
            props.articleSlug,
            props.categorySlug,
            props.limit
          );
          break;
        case ArticleBatchVariant.LATEST:
        default:
          data = await getArticlesWithLimit(props.limit);
          break;
      }

      setArticles(data || []);
    } catch (err) {
      console.log(err);
      NotificationHandler.instance.error("Failed to fetch articles");
    }
  };

  return (
    <>
      {props.enableSliderResponsiveMode &&
      ["sm", "md", "lg"].includes(width ? screen : "sm") ? (
        <>
          <Carousel
            arrowsBackground="var(--secondary-darker)"
            cta={{
              children: ["sm", "md", "lg"].includes(width ? screen : "sm")
                ? "Read More"
                : "Read Other Articles",
              onClick: () => router.push("/blog"),
              variant: "secondary",
            }}
            items={
              articles
                ? articles.map((article, i) => {
                    return (
                      <ArticlePreview
                        variant={props.variant}
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
                  })
            }
          />
        </>
      ) : (
        <div
          className={`
            article-batch tw-relative tw-z-[5] tw-flex tw-w-full
            tw-max-w-screen-xl tw-flex-col tw-gap-[20px] tw-transition-all
            tw-duration-200 tw-ease-in-out

            lg:tw-grid lg:tw-grid-cols-3

            md:tw-gap-[30px]
          `}
        >
          {articles
            ? articles.map((article, i) => {
                return (
                  <ArticlePreview
                    variant={props.variant}
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
