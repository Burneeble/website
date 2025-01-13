"use client";

import { useContext } from "react";
import { graphQLServiceContext } from "./GraphQLServiceContext";

export const useGraphQLService = () => {
  const context = useContext(graphQLServiceContext);

  if (!context) {
    throw new Error(
      "`useGraphQLService` must be used within a `GraphQLServiceProvider`"
    );
  }

  return context;
};
