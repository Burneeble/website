"use client";

import { createContext } from "react";
import { ArticleModel } from "./models";

export interface ArticleServiceContent {
  getArticlesWithLimit(limit: number): Promise<ArticleModel[]>;
}

export const articleServiceContext = createContext<ArticleServiceContent>({
  getArticlesWithLimit: async () => [],
});
