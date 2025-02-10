"use client";

import Grid from "@/components/Grid";
import { CategoryArticlesProps } from "./CategoryArticles.types";
import {
  ArticlePreview,
  ArticlePreviewSkeleton,
  Button,
  NotFound,
  useClientInfoService,
} from "@burneeble/ui-components";
import { cn } from "@/lib/utils";
import { useCategoryPageService } from "../CategoryPageService";

const CategoryArticles = (props: CategoryArticlesProps) => {
  //Hooks
  const { screen } = useClientInfoService();
  const {
    setIsLoading,
    fetchArticles,
    hasNextPage,
    articles,
    isLoading,
    batchSize,
    searchQuery,
  } = useCategoryPageService();

  return (
    <section
      className={`
        cs-section-structure category-articles tw-relative tw-overflow tw-flex
        tw-max-w-[unset] tw-flex-col tw-items-center tw-justify-center
        cs-gap-between-content tw-overflow-hidden
      `}
    >
      <div
        className={`
          shape-one shape tw-left-0 tw-top-[300px] -tw-translate-x-1/2
        `}
      />
      <div
        className={`
          shape-two shape tw-right-0 tw-top-[900px] tw-translate-x-1/2
        `}
      />
      <Grid className="tw-max-w-screen-xl">
        {articles &&
          articles.map((article, i) => {
            return (
              <ArticlePreview
                key={i}
                thumbnail={article.thumbnail}
                title={article.title}
                category={article.categories[0].name}
                categorySlug={article.categories[0].slug}
                slug={article.slug}
                variant="dark"
                description={article.content}
                query={searchQuery || ""}
              />
            );
          })}
        {isLoading &&
          Array.from({ length: batchSize }).map((_, i) => {
            return <ArticlePreviewSkeleton key={i} />;
          })}
      </Grid>
      {articles && articles.length <= 0 && !isLoading && (
        <NotFound
          title={"No Article Found"}
          text={
            "We couldn't find any article that matches your search. Please try again with a different keyword."
          }
        />
      )}
      <div
        className={cn(
          `
            button-wrapper tw-flex tw-w-full tw-items-center tw-justify-end
            tw-overflow-hidden tw-transition-all tw-duration-500 tw-ease-in-out
          `,
          hasNextPage ? "tw-h-[48px] tw-opacity-100" : "tw-h-0 tw-opacity-0"
        )}
      >
        <Button
          variant="secondary"
          fit={screen === "sm" ? "full" : "inline"}
          className={cn(
            `
              tw-mx-auto tw-mt-auto !tw-bg-black tw-px-[75px]

              lg:tw-mr-0
            `,
            !hasNextPage && "tw-pointer-events-none"
          )}
          onClick={async () => {
            setIsLoading(true);
            await fetchArticles();
            setIsLoading(false);
          }}
        >
          See More
        </Button>
      </div>
    </section>
  );
};

export default CategoryArticles;
