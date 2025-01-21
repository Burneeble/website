"use client";

import { Label, SearchBar } from "@burneeble/ui-components";
import { CategoryHeroProps } from "./CategoryHero.types";

const CategoryHero = (props: CategoryHeroProps) => {
  return (
    <section
      className={`
        cs-section-structure tw-min-h-0 tw-relative tw-h-[600px] tw-flex
        tw-flex-col tw-justify-center tw-items-start tw-gap-[10px] tw-pt-[150px]
      `}
    >
      <div
        className={`
          bg
          tw-bg-[linear-gradient(180deg,black_1%,rgba(0,0,0,0)_80%),url("/img/category-page/gallery-hero-bg.png")]
          tw-absolute tw-top-1/2 tw-left-1/2 tw-w-screen tw-h-full tw-z-[-1]
          -tw-translate-x-1/2 -tw-translate-y-1/2 tw-bg-cover tw-bg-no-repeat
          tw-bg-center
        `}
      />
      <Label text={props.category.name} variant="active" />
      <h1 className="category-name">{props.category.name}</h1>
      <p className="description p-default tw-text-headings">
        {props.category.description}
      </p>
      <SearchBar
        value={""}
        setValue={(_value: string) => {}}
        onChange={(_value: string) => {}}
      />
    </section>
  );
};

export default CategoryHero;
