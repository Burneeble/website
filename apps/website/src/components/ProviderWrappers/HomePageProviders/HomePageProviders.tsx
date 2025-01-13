"use client";

import ReviewServiceProvider from "@/services/ReviewService";
import { HomePageProvidersProps } from "./HomePageProviders.types";
import SkillServiceProvider from "@/services/SkillService";
import { ArticleServiceProvider } from "@/services";

const HomePageProviders = (props: HomePageProvidersProps) => {
  return (
    <ReviewServiceProvider>
      <SkillServiceProvider>
        <ArticleServiceProvider>{props.children}</ArticleServiceProvider>
      </SkillServiceProvider>
    </ReviewServiceProvider>
  );
};

export default HomePageProviders;
