"use client";

import { useEffect, useState } from "react";
import { DiscoverProps } from "./Discover.types";
import { ArticlePreview, Button, SearchBar } from "@burneeble/ui-components";
import Grid from "@/components/Grid";
import { cn } from "@/lib/utils";
import { useClientInfoService } from "@burneeble/ui-components";
import { ArticleModel } from "@/services";

const Discover = (props: DiscoverProps) => {
  //States
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [articles, setArticles] = useState<Array<ArticleModel> | null>(null);

  //Hooks
  const { screen } = useClientInfoService();

  //Effects
  useEffect(() => {
    setTimeout(() => {
      setArticles([]);
    }, 2000);
  }, []);

  return (
    <section
      className={`
        discover cs-website-vertical-padding tw-flex tw-flex-col
        cs-gap-between-content tw-items-center tw-justify-center tw-min-h-screen
      `}
    >
      <h2 className="title tw-text-center">
        <span className="cs-text-color-primary-gradient">Discover more</span>{" "}
        Articles
      </h2>
      <SearchBar
        value={searchQuery}
        setValue={setSearchQuery}
        onChange={() => {}}
      />
      <Grid>
        {articles &&
          [1, 2, 3, 4, 5, 6].map((_, i) => {
            return (
              <ArticlePreview
                key={i}
                thumbnail={"https://picsum.photos/1920/1080"}
                title={
                  "How to Install OpenDevin in 5 Steps: Updated May Version"
                }
                category={"MacOS Tutorial"}
                categorySlug={"macos-tutorial"}
                slug={""}
                variant="dark"
                description={
                  "Do you want to install the new OpenDevin but are having trouble? Through this step-by-step guide and the related video, you will no longer have any doubts about how to do it. It’s easier than "
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
          // hasNextPage
          // 1==1 ? "tw-h-[48px] tw-opacity-100" : "tw-h-0 tw-opacity-0"
        )}
      >
        <Button
          variant="secondary"
          fit={screen === "sm" ? "full" : "inline"}
          className={cn(
            `
              !tw-bg-black tw-mx-auto tw-px-[75px] tw-mt-auto

              lg:tw-mr-0
            `,
            // !hasNextPage
            false && "tw-pointer-events-none"
          )}
          onClick={async () => {
            // setIsLoading(true);
            // fetchProjects();
            // setIsLoading(false);
          }}
        >
          See More
        </Button>
      </div>
    </section>
  );
};

export default Discover;
