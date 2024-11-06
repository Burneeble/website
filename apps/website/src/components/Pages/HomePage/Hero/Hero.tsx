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
    <div className="hero tw-bg-[radial-gradient(_rgba(43,43,43,1),_#000_90%)] tw-w-screen tw-flex tw-flex-col tw-justify-center tw-gap-[20px] tw-pt-[86px] tw-px-[20px] tw-pb-[50px] tw-max-w-[1300px] tw-mx-auto md:tw-px-[31px] xl:tw-px-[20px] xl:tw-h-[calc(100vh-48px)]">
      <h1 className="tw-text-white !tw-leading-normal tw-text-3xl tw-font-bowlby-one md:tw-text-5xl xl:tw-w-[910px] xl:tw-text-6xl">
        Build and grow your project with <strong>BURNEEBLE</strong>.<br />
        <strong>No limits</strong>, in every platform and space.
      </h1>
      <div className="tw-flex tw-flex-wrap tw-gap-[13px] md:tw-gap-[20px] xl:tw-w-[751px] tw-relative tw-z-[1]">
        {labels.map((label, i) => (
          <Label key={i} text={label} size={getLabelSize()} />
        ))}
      </div>
      <Button
        size={screen === "sm" || screen === "md" ? "default" : "lg"}
        fit="inline"
      >
        Start Building
      </Button>
    </div>
  );
};

export default Hero;
