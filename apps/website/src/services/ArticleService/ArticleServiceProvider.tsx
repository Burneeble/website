"use client";

import { ArticleService } from "./ArticleService";
import { ArticleServiceProviderProps } from "./ArticleService.types";
import { articleServiceContext } from "./ArticleServiceContext";
import { ArticleModel } from "./models";

const ArticleServiceProvider = (props: ArticleServiceProviderProps) => {
  //Methods
  const getArticlesWithLimit = async (
    limit: number
  ): Promise<ArticleModel[]> => {
    return ArticleService.instance.getArticlesWithLimit(limit);
  };

  return (
    <articleServiceContext.Provider value={{ getArticlesWithLimit }}>
      {props.children}
    </articleServiceContext.Provider>
  );
};

export default ArticleServiceProvider;
