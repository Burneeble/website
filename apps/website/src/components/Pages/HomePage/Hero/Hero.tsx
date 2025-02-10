"use client";

import { Button, Label, useClientInfoService } from "@burneeble/ui-components";
import { HeroProps } from "./Hero.types";

const Hero = (props: HeroProps) => {
  //States
  const labels = [
    "#Ethereum",
    "#Ecommerce",
    "#DApp",
    "#AWS",
    "#Shopify",
    "#Web3",
    "#Blockchain",
  ];

  //Hooks
  const { screen } = useClientInfoService();

  //Methods
  const getLabelSize = () => {
    switch (screen) {
      case "sm":
        return "sm";
      case "md":
        return "default";
      case "lg":
      case "xl":
      case "2xl":
        return "lg";
    }
  };

  return (
    <section
      className={`
        hero cs-section-structure cs-gap-between-content tw-relative tw-flex
        tw-flex-col tw-justify-center tw-pt-[86px]
      `}
    >
      <div
        className={`
          hero-shape tw-absolute tw-left-1/2 tw-top-1/2 tw-h-[40rem]
          tw-w-[80rem] -tw-translate-x-1/2 -tw-translate-y-1/2 tw-rotate-[30deg]
          tw-bg-[radial-gradient(_rgba(80,80,80,1)_10%,_#000_80%)]
          tw-opacity-[.5] tw-blur-[100px]
        `}
      />
      <h1
        className={`
          title tw-z-[2]

          xl:tw-w-[910px]
        `}
      >
        Build and grow your project with{" "}
        <span className="gradient-text">BURNEEBLE</span>.<br />
        <span className="gradient-text">No limits</span>, in every platform and
        space.
      </h1>
      <div
        className={`
          labels tw-relative tw-z-[2] tw-flex tw-flex-wrap tw-gap-[13px]

          md:tw-gap-5

          xl:tw-w-[751px]
        `}
      >
        {labels.map((label, i) => (
          <Label
            variant={"default"}
            key={i}
            text={label}
            size={getLabelSize()}
          />
        ))}
      </div>
      <Button
        size={screen === "sm" || screen === "md" ? "default" : "lg"}
        fit="inline"
      >
        Start Building
      </Button>
    </section>
  );
};

export default Hero;
