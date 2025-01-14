"use client";

import { Button, Label, useClientInfoService } from "@burneeble/ui-components";
import { HeroProps } from "./Hero.types";
import { Canvas } from "@react-three/fiber";
import { HeroCanvas } from "./components";
import * as THREE from "three";
import { Suspense } from "react";

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
  const { screen, width } = useClientInfoService();
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
    <>
      <section
        className={`
          hero cs-section-structure cs-gap-between-content tw-flex tw-flex-col
          tw-pt-[134px] tw-relative tw-justify-start

          lg:tw-pt-[221px]

          xl:tw-justify-center xl:tw-pt-[86px]
        `}
      >
        <div
          className={`
            hero-shape tw-absolute tw-top-[50%] tw-left-[50%]
            -tw-translate-x-[50%] -tw-translate-y-[50%] tw-w-[80rem]
            tw-h-[40rem]
            tw-bg-[radial-gradient(_rgba(80,80,80,1)_10%,_#000_80%)]
            tw-opacity-[.5] tw-blur-[100px] tw-rotate-[30deg]
          `}
        ></div>

        <div
          className={`
            cs-gap-between-content tw-flex tw-flex-col tw-z-[2]

            lg:tw-w-[910px]
          `}
        >
          <h1 className={`title`}>
            Build and grow your project with{" "}
            <span className="gradient-text">BURNEEBLE</span>.<br />
            <span className="gradient-text">No limits</span>, in every platform
            and space.
          </h1>
          <div
            className={`
              labels tw-relative tw-flex tw-flex-wrap tw-gap-[13px]

              md:tw-gap-5
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
          {width && width < 992 && (
            <Suspense>
              <Canvas
                gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}
                style={{
                  height: "80vh",
                  width: "100%",
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: "-1",
                }}
              >
                <HeroCanvas />
              </Canvas>
            </Suspense>
          )}
        </div>
      </section>
      {width && width >= 992 && (
        <Suspense>
          <Canvas
            gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}
            style={{
              height: "100vh",
              width: "50%",
              position: "absolute",
              zIndex: "1",
              right: "0",
              top: "0",
            }}
          >
            <HeroCanvas />
          </Canvas>
        </Suspense>
      )} 
    </>
  );
};

export default Hero;
