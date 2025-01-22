"use client";

import { useCallback, useEffect, useState } from "react";
import { CategoryPageServiceProviderProps } from "./CategoryPageService.types";
import { categoryPageServiceContext } from "./CategoryPageServiceContext";
import { ArticleModel, GET_ARTICLES_BY_CATEGORY_QUERY } from "@/services";
import { GetArticlesByCategoryQueryQuery } from "@/__generated__/graphql";
import { NotificationHandler } from "@burneeble/ui-components";
import { useQuery } from "@apollo/client";

const CategoryPageServiceProvider = (
  props: CategoryPageServiceProviderProps
) => {
  //States
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [articles, setArticles] = useState<Array<ArticleModel> | null>(null);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [endCursor, setEndCursor] = useState<string>("0");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const batchSize = 6;

  //Hooks
  const { data: articlesData, fetchMore: fetchMoreArticles } = useQuery(
    GET_ARTICLES_BY_CATEGORY_QUERY,
    {
      variables: {
        category: props.categoryName,
        limit: batchSize,
        offset: endCursor,
        search: searchQuery,
      },
    }
  );

  //Effects

  useEffect(() => {
    if (isFirstRender) setIsFirstRender(false);
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
          category: props.categoryName,
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

  //Methods

  const triggerRefresh = () => {
    if (!isLoading) {
      setIsLoading(true);
      setEndCursor("tmp");
      setArticles([]);
    }
  };

  const articleFormatter = (
    data: GetArticlesByCategoryQueryQuery
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
    <categoryPageServiceContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        batchSize,
        articles,
        hasNextPage,
        isLoading,
        setIsLoading,
        fetchArticles,
        triggerRefresh,
      }}
    >
      {props.children}
    </categoryPageServiceContext.Provider>
  );
};

export default CategoryPageServiceProvider;
