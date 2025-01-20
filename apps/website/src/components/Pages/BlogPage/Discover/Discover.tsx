"use client";

import { useCallback, useEffect, useState } from "react";
import { DiscoverProps } from "./Discover.types";
import {
  ArticlePreview,
  ArticlePreviewSkeleton,
  Button,
  NotFound,
  NotificationHandler,
  SearchBar,
} from "@burneeble/ui-components";
import Grid from "@/components/Grid";
import { cn } from "@/lib/utils";
import { useClientInfoService } from "@burneeble/ui-components";
import { ArticleModel, GET_ARTICLES_QUERY } from "@/services";
import { useQuery } from "@apollo/client";
import { GetArticlesQueryQuery } from "@/__generated__/graphql";

const Discover = (props: DiscoverProps) => {
  //States
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [articles, setArticles] = useState<Array<ArticleModel> | null>(null);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [endCursor, setEndCursor] = useState<string>("0");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const batchSize = 1;
  const [isFirstRender, setIsFirstRender] = useState<number>(0);

  //Hooks
  const { screen } = useClientInfoService();
  const { data: articlesData, fetchMore: fetchMoreArticles } = useQuery(
    GET_ARTICLES_QUERY,
    {
      variables: {
        limit: batchSize,
        offset: endCursor,
        search: searchQuery,
      },
    }
  );

  //Effects

  useEffect(() => {
    if (isFirstRender < 2) setIsFirstRender((prev) => prev + 1);
    else {
      if (endCursor === "tmp") setEndCursor("0");
      if (endCursor === "0") fetchArticles();
    }
  }, [endCursor]);

  useEffect(() => {
    if (articlesData && !articles) {
      setEndCursor(articlesData!.posts?.pageInfo.endCursor || "0");
      setHasNextPage(articlesData!.posts?.pageInfo.hasNextPage || false);
      const articlesInfo = articleFormatter(articlesData!);

      setArticles(articlesInfo);
      setIsLoading(false);
    }
  }, [articlesData]);

  //Methods

  const fetchArticles = useCallback(async () => {
    setIsLoading(true);
    try {
      if (!fetchMoreArticles) return;
      const { data: res } = await fetchMoreArticles({
        variables: {
          limit: batchSize,
          offset: endCursor,
          search: searchQuery,
        },
      });

      const data = res;
      setEndCursor(data.posts?.pageInfo.endCursor || "0");
      setHasNextPage(data.posts?.pageInfo.hasNextPage || false);
      const tmp = articleFormatter(data);

      if (tmp) {
        setArticles((prev) => [...(prev || []), ...tmp]);
      }
    } catch (e) {
      console.log(e);
      NotificationHandler.instance.error("Error fetching articles");
    }
    setIsLoading(false);
  }, [batchSize, endCursor, fetchMoreArticles, searchQuery]);

  const triggerRefresh = () => {
    setIsLoading(true);
    setEndCursor("tmp");
    setArticles([]);
  };

  const articleFormatter = (
    data: GetArticlesQueryQuery
  ): ArticleModel[] | null => {
    const articlesInfo: ArticleModel[] | null = data.posts
      ? data.posts?.nodes.map((node) => {
          const article = new ArticleModel();

          article.title = node.title || "";
          article.content = node.content || "";
          article.slug = node.slug || "";
          article.categories =
            node.categories?.nodes.map((category: any) => {
              return { name: category.name || "", slug: category.slug || "" };
            }) || [];
          article.thumbnail = node.featuredImage?.node.guid || "";

          return article;
        })
      : null;

    return articlesInfo;
  };

  return (
    <section
      className={`
        discover cs-website-vertical-padding tw-flex tw-flex-col
        cs-gap-between-content tw-items-center tw-justify-center tw-min-h-screen
      `}
    >
      <h2 className="title tw-text-center">
        <span className="cs-text-color-primary-gradient">Discover more</span>{" "}
        Articles
      </h2>
      <SearchBar
        value={searchQuery}
        setValue={setSearchQuery}
        onChange={() => {
          triggerRefresh();
        }}
      />
      <Grid>
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
            button-wrapper tw-w-full tw-flex tw-justify-end tw-items-center
            tw-transition-all tw-duration-500 tw-ease-in-out tw-overflow-hidden
          `,
          hasNextPage ? "tw-h-[48px] tw-opacity-100" : "tw-h-0 tw-opacity-0"
        )}
      >
        <Button
          variant="secondary"
          fit={screen === "sm" ? "full" : "inline"}
          className={cn(
            `
              !tw-bg-black tw-mx-auto tw-px-[75px] tw-mt-auto

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

export default Discover;
