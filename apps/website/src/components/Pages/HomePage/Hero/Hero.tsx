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
        hero cs-section-structure cs-gap-between-content tw-flex tw-flex-col
        tw-justify-center tw-pt-[86px] tw-relative
      `}
    >
      <div
        className={`
          hero-shape tw-absolute tw-top-[50%] tw-left-[50%]
          -tw-translate-x-[50%] -tw-translate-y-[50%] tw-w-[80rem] tw-h-[40rem]
          tw-bg-[radial-gradient(_rgba(80,80,80,1)_10%,_#000_80%)]
          tw-opacity-[.5] tw-blur-[100px] tw-rotate-[30deg]
        `}
      ></div>

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
          labels tw-relative tw-z-[1] tw-flex tw-flex-wrap tw-gap-[13px]
          tw-z-[2]

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
