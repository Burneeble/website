"use client";

import { ArticleModel } from "@/services";
import { createContext, Dispatch, SetStateAction } from "react";

export interface CategoryPageServiceContent {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  articles: ArticleModel[] | null;
  batchSize: number;
  hasNextPage: boolean;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  fetchArticles: () => Promise<void>;
  triggerRefresh: () => void;
}

export const categoryPageServiceContext =
  createContext<CategoryPageServiceContent>({
    searchQuery: "",
    setSearchQuery: () => {},
    articles: null,
    batchSize: 0,
    hasNextPage: true,
    isLoading: true,
    setIsLoading: () => {},
    fetchArticles: async () => {},
    triggerRefresh: () => {},
  });
