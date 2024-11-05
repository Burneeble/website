"use client";

import { Button, Label } from "@burneeble/ui-components";
import { HeroProps } from "./Hero.types";

const Hero = (props: HeroProps) => {
  return (
    <div className="hero tw-h-screen tw-w-screen tw-flex tw-flex-col tw-justify-center tw-gap-8">
      <h1 className="tw-text-white">
        Build and grow your project with <strong>BURNEEBLE</strong>.{" "}
        <strong>No limits</strong>, in every platform and space.
      </h1>
      <div>
        <Label text={"#Ethereum"} />
        <Label text={"#Ecommerce"} />
        <Label text={"#DApp"} />
        <Label text={"#AWS"} />
        <Label text={"#Shopify"} />
        <Label text={"#Web3"} />
        <Label text={"#Blockchain"} />
      </div>
      <Button>Start Building</Button>
    </div>
  );
};

export default Hero;
