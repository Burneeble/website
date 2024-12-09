"use client";

import {
  AwsIcon,
  CrossmintIcon,
  EthereumIcon,
  FigmaIcon,
  NextJsIcon,
  StripeIcon,
  TailwindIcon,
  WordpressIcon,
} from "@burneeble/icons";
import { TechnologyProps } from "./Technology.types";
import { useClientInfoService } from "@burneeble/ui-components";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Technology = (props: TechnologyProps) => {
  //States
  const [isHovered, setIsHovered] = useState<boolean>(false);

  //Hooks
  const { screen } = useClientInfoService();

  //Methods
  const getIcon = () => {
    switch (props.slug) {
      case "aws":
        return <AwsIcon />;
      case "next-js":
        return <NextJsIcon />;
      case "stripe":
        return <StripeIcon />;
      case "crossmint":
        return <CrossmintIcon />;
      case "tailwind":
        return <TailwindIcon />;
      case "figma":
        return <FigmaIcon />;
      case "wordpress":
        return <WordpressIcon />;
      case "ethereum":
        return <EthereumIcon />;
      default:
        return <>not found</>;
    }
  };

  return (
    <div
      className={cn(
        `
          technology tw-w-[157px] tw-h-[58px] tw-py-[15.27px]
          tw-bg-gradient-to-r tw-from-[var(--primary-default)]
          tw-to-[var(--primary-lighter)] tw-rounded tw-flex-col
          tw-justify-center tw-items-center tw-inline-flex tw-text-[100px]
          tw-text-headings tw-transition-all tw-duration-200 tw-ease-in-out
          tw-cursor-help

          hover:tw-bg-gradient-to-r hover:tw-from-brown-500
          hover:tw-to-brown-200

          md:tw-w-[188.35px] md:tw-h-[62px] md:tw-text-[106px]

          xl:tw-w-[324px] xl:tw-h-[106.06px] xl:tw-text-[152px]
        `,
        !["sm", "md"].includes(screen) && "tw-relative"
      )}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={() => {
        console.log(screen);
        if (["sm", "md"].includes(screen)) {
          if (isHovered) {
            setIsHovered(false);
          } else setIsHovered(true);
        }
      }}
    >
      {getIcon()}
      <div
        className={cn(
          `
            tw-absolute tw-left-1/2 -tw-translate-x-1/2 tw-justify-start
            tw-items-center tw-flex-col tw-top-full tw-transition-opacity
            tw-duration-200 tw-ease-in-out tw-opacity-0 tw-flex tw-w-[30rem]
            tw-max-w-[90vw] tw-rounded-lg tw-border-[1px] tw-border-solid
            tw-text-headings tw-shadow-[0_5px_5px_rgba(0,0,0,0.26)]
            tw-bg-gradient-to-b secondary-gradient-to-custom
            tw-border-[var(--secondary-default)] tw-z-[2] tw-h-0 tw-max-h-0
            tw-overflow-hidden tw-pointer-events-none

            hover:tw-opacity-100 hover:tw-h-auto hover:tw-p-[20px]
            hover:tw-max-h-[unset] hover:tw-overflow-visible
            hover:tw-pointer-events-auto
          `,
          isHovered &&
            `
              tw-opacity-100 tw-h-auto tw-p-[20px] tw-overflow-visible
              tw-max-h-[unset] tw-pointer-events-auto
            `
        )}
      >
        <p className="tw-text-center tw-text-headings tw-font-bold">
          {props.name}
        </p>
        <p className="tw-text-center p-small tw-font-light !tw-text-xl">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Technology;
