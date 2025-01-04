"use client";

import { ArticleServiceProviderProps } from "./ArticleService.types";
import { articleServiceContext } from "./ArticleServiceContext";

const ArticleServiceProvider = (props: ArticleServiceProviderProps) => {
  return (
    <articleServiceContext.Provider value={{}}>
      {props.children}
    </articleServiceContext.Provider>
  );
};

export default ArticleServiceProvider;
