"use client";

import { ReviewService } from "./ReviewService";
import { ReviewServiceProviderProps } from "./ReviewService.types";
import { reviewServiceContext } from "./ReviewServiceContext";

const ReviewServiceProvider = (props: ReviewServiceProviderProps) => {
  //Methods
  const getReviews = async () => {
    return await ReviewService.instance.getReviews();
  };

  return (
    <reviewServiceContext.Provider value={{ getReviews }}>
      {props.children}
    </reviewServiceContext.Provider>
  );
};

export default ReviewServiceProvider;
