"use client";

import ReviewServiceProvider from "@/services/ReviewService";
import { HomePageProvidersProps } from "./HomePageProviders.types";

const HomePageProviders = (props: HomePageProvidersProps) => {
  return <ReviewServiceProvider>{props.children}</ReviewServiceProvider>;
};

export default HomePageProviders;
