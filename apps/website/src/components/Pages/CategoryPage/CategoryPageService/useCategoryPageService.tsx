"use client";

import { useContext } from "react";
import { categoryPageServiceContext } from "./CategoryPageServiceContext";

export const useCategoryPageService = () => {
  const context = useContext(categoryPageServiceContext);

  if (!context) {
    throw new Error(
      "`useCategoryPageService` must be used within a `CategoryPageServiceProvider`"
    );
  }

  return context;
};
