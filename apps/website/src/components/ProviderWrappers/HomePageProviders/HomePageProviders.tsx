"use client";

import ReviewServiceProvider from "@/services/ReviewService";
import { HomePageProvidersProps } from "./HomePageProviders.types";
import SkillServiceProvider from "@/services/SkillService";

const HomePageProviders = (props: HomePageProvidersProps) => {
  return (
    <ReviewServiceProvider>
      <SkillServiceProvider>{props.children}</SkillServiceProvider>
    </ReviewServiceProvider>
  );
};

export default HomePageProviders;
