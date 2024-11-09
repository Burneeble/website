"use client";

import { useContext } from "react";
import { reviewServiceContext } from "./ReviewServiceContext";

export const useReviewService = () => {
  const context = useContext(reviewServiceContext);

  if (!context) {
    throw new Error(
      "`useReviewService` must be used within a `ReviewServiceProvider`"
    );
  }

  return context;
};
