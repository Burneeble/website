"use client";

import { createContext } from "react";
import { ReviewModel } from "./models";

export interface ReviewServiceContent {
  getReviews: () => Promise<Array<ReviewModel>>;
}

export const reviewServiceContext = createContext<ReviewServiceContent>({
  getReviews: async () => [],
});
