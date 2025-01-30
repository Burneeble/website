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

  const getArticles = async (category?: string): Promise<ArticleModel[]> => {
    return ArticleService.instance.getArticles(category);
  };

  const getCategory = async (slug: string): Promise<CategoryModel | null> => {
    return await ArticleService.instance.getCategory(slug);
  };

  const getArticle = async (slug: string): Promise<ArticleModel | null> => {
    return await ArticleService.instance.getArticle(slug);
  };

  const getRelatedArticles = async (
    postSlug: string,
    categorySlug: string,
    limit: number
  ): Promise<Array<ArticleModel> | null> => {
    return await ArticleService.instance.getRelatedArticles(
      postSlug,
      categorySlug,
      limit
    );
  };

  return (
    <articleServiceContext.Provider
      value={{
        getArticlesWithLimit,
        getArticles,
        getCategory,
        getArticle,
        getRelatedArticles,
      }}
    >
      {props.children}
    </articleServiceContext.Provider>
  );
};

export default ArticleServiceProvider;
