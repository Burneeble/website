"use client";

import { createContext } from "react";
import { ArticleModel, CategoryModel } from "./models";

export interface ArticleServiceContent {
  getArticlesWithLimit(limit: number): Promise<ArticleModel[]>;
  getArticles(category?: string): Promise<ArticleModel[]>;
  getCategory(slug: string): Promise<CategoryModel | null>;
  getArticle(slug: string): Promise<ArticleModel | null>;
  getRelatedArticles(
    postSlug: string,
    categorySlug: string,
    limit: number
  ): Promise<Array<ArticleModel> | null>;
}

export const articleServiceContext = createContext<ArticleServiceContent>({
  getArticlesWithLimit: async () => [],
  getArticles: async () => [],
  getCategory: async () => null,
  getArticle: async () => null,
  getRelatedArticles: async () => null,
});
