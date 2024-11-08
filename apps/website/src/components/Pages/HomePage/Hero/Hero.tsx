"use client";

import { Button, Label } from "@burneeble/ui-components";
import { HeroProps } from "./Hero.types";

const Hero = (props: HeroProps) => {
  return (
    <div className="hero tw-h-[calc(100vh-48px)] tw-w-screen tw-flex tw-flex-col tw-justify-center tw-gap-[10px] tw-pt-[171px] tw-px-[20px] tw-pb-[50px] tw-max-w-[1300px] tw-mx-auto">
      <h1 className="tw-text-white  tw-text-6xl tw-font-bowlby-one tw-w-[889px] tw-font-extrabold">
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
