"use client";

import Grid from "@/components/Grid";
import { CategoryArticlesProps } from "./CategoryArticles.types";
import {
  ArticlePreview,
  Button,
  useClientInfoService,
} from "@burneeble/ui-components";
import { cn } from "@/lib/utils";
import { useState } from "react";

const CategoryArticles = (props: CategoryArticlesProps) => {
  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Hooks
  const { screen } = useClientInfoService();

  return (
    <section
      className={`
        cs-section-structure category-articles tw-relative tw-overflow
        tw-max-w-[unset] tw-flex tw-items-center tw-justify-start tw-flex-col
        cs-gap-between-content
      `}
    >
      <div
        className={`
          shape-one shape tw-top-[300px] tw-left-0 -tw-translate-x-1/2
        `}
      />
      <div
        className={`
          shape-two shape tw-top-[900px] tw-right-0 tw-translate-x-1/2
        `}
      />
      <Grid className="tw-max-w-[1300px]">
        {[1, 2, 3, 4, 5, 6].map((_, index) => {
          return (
            <ArticlePreview
              key={index}
              thumbnail={"https://picsum.photos/1920/1080"}
              title={"How to Install OpenDevin in 5 Steps: Updated May Version"}
              category={"MacOS Tutorial"}
              categorySlug={"macos-tutorial"}
              slug={""}
              variant="dark"
              description={
                "Do you want to install the new OpenDevin but are having trouble? Through this step-by-step guide and the related video, you will no longer have any doubts about how to do it. It’s easier than"
              }
            />
          );
        })}
      </Grid>
      <div
        className={cn(
          `
            button-wrapper tw-w-full tw-flex tw-justify-end tw-items-center
            tw-transition-all tw-duration-500 tw-ease-in-out tw-overflow-hidden
          `
          //   hasNextPage ? "tw-h-[48px] tw-opacity-100" : "tw-h-0 tw-opacity-0"
        )}
      >
        <Button
          variant="secondary"
          fit={screen === "sm" ? "full" : "inline"}
          className={cn(
            `
              !tw-bg-black tw-mx-auto tw-px-[75px] tw-mt-auto

              lg:tw-mr-0
            `
            // !hasNextPage && "tw-pointer-events-none"
          )}
          onClick={async () => {
            setIsLoading(true);
            // await fetchArticles();
            setIsLoading(false);
          }}
        >
          See More
        </Button>
      </div>
    </section>
  );
};

export default CategoryArticles;
