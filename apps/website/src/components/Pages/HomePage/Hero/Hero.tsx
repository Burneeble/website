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
        tw-justify-center
        tw-bg-[radial-gradient(_rgba(43,43,43,1)_10%,_#000_80%)] tw-pt-[86px]
      `}
    >
      <h1
        className={`
          title

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
