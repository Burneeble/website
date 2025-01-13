"use client";

import { useContext } from "react";
import { articleServiceContext } from "./ArticleServiceContext";

export const useArticleService = () => {
  const context = useContext(articleServiceContext);

  if (!context) {
    throw new Error(
      "`useArticleService` must be used within a `ArticleServiceProvider`"
    );
  }

  return context;
};
