"use client";

import { Button, Label } from "@burneeble/ui-components";
import { HeroProps } from "./Hero.types";

const Hero = (props: HeroProps) => {
  return (
    <div className="hero tw-w-screen tw-flex tw-flex-col tw-justify-center tw-gap-[20px] tw-pt-[134px] tw-px-[20px] tw-pb-[50px] tw-max-w-[1300px] tw-mx-auto">
      <h1 className="tw-text-white  tw-text-3xl tw-leading-normal tw-font-bowlby-one">
        Build and grow your project with <strong>BURNEEBLE</strong>.<br />
        <strong>No limits</strong>, in every platform and space.
      </h1>
      <div className="tw-flex tw-flex-wrap tw-gap-[13px]">
        <Label text={"#Ethereum"} size={"sm"} />
        <Label text={"#Ecommerce"} size={"sm"} />
        <Label text={"#DApp"} size={"sm"} />
        <Label text={"#AWS"} size={"sm"} />
        <Label text={"#Shopify"} size={"sm"} />
        <Label text={"#Web3"} size={"sm"} />
        <Label text={"#Blockchain"} size={"sm"} />
      </div>
      <Button size="lg" fit="inline">
        Start Building
      </Button>
    </div>
  );
};

export default Hero;
