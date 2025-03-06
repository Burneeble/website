"use client";

import { Label, SearchBar } from "@burneeble/ui-components";
import { CategoryHeroProps } from "./CategoryHero.types";
import { useCategoryPageService } from "../CategoryPageService";

const CategoryHero = (props: CategoryHeroProps) => {
  //Hooks
  const { triggerRefresh, searchQuery, setSearchQuery } =
    useCategoryPageService();

  return (
    <section
      className={`
        article-category-hero-section cs-section-structure tw-relative tw-flex
        tw-h-[600px] tw-min-h-0 tw-flex-col tw-items-start tw-justify-center
        tw-gap-[10px] tw-pt-[150px]
      `}
    >
      <div
        className={`
          article-category-page-bg tw-absolute tw-left-1/2 tw-top-1/2 tw-z-[-1]
          tw-h-full tw-w-screen -tw-translate-x-1/2 -tw-translate-y-1/2
          tw-bg-cover tw-bg-no-repeat
        `}
      />
      <Label text={"Category"} variant="active" />
      <h1 className="category-name">{props.category.name}</h1>
      <p className="description p-default tw-text-headings">
        {props.category.description}
      </p>
      <SearchBar
        value={searchQuery}
        setValue={setSearchQuery}
        onChange={() => {
          triggerRefresh();
        }}
      />
    </section>
  );
};

export default CategoryHero;
