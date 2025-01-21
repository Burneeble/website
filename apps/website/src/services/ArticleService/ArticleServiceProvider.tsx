"use client";

import { ArticleService } from "./ArticleService";
import { ArticleServiceProviderProps } from "./ArticleService.types";
import { articleServiceContext } from "./ArticleServiceContext";
import { ArticleModel, CategoryModel } from "./models";

const ArticleServiceProvider = (props: ArticleServiceProviderProps) => {
  //Methods
  const getArticlesWithLimit = async (
    limit: number
  ): Promise<ArticleModel[]> => {
    return ArticleService.instance.getArticlesWithLimit(limit);
  };

  const getArticles = async (
    categories?: string[]
  ): Promise<ArticleModel[]> => {
    return ArticleService.instance.getArticles(categories);
  };

  const getCategory = async (slug: string): Promise<CategoryModel | null> => {
    return ArticleService.instance.getCategory(slug);
  };

  return (
    <articleServiceContext.Provider
      value={{ getArticlesWithLimit, getArticles, getCategory }}
    >
      {props.children}
    </articleServiceContext.Provider>
  );
};

export default ArticleServiceProvider;
