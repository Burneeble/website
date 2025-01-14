"use client";

import { useState } from "react";
import { DiscoverProps } from "./Discover.types";
import { SearchBar } from "@burneeble/ui-components";
// import { useClientInfoService } from "@burneeble/ui-components";

const Discover = (props: DiscoverProps) => {
  //States
  const [searchQuery, setSearchQuery] = useState<string>("");

  //Hooks
  //   const { screen } = useClientInfoService();

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
    </section>
  );
};

export default Discover;
