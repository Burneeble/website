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
import { useEffect, useRef, useState } from "react";

const Technology = (props: TechnologyProps) => {
  //States
  const [isHovered, setIsHovered] = useState<boolean>(false);

  //Hooks
  const { screen, width } = useClientInfoService();
  const tooltip = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (
      tooltip.current &&
      container.current &&
      props.wrapperRef.current &&
      width
    ) {
      tooltip.current.style.top = "100%";
      tooltip.current.style.left = "50%";
      tooltip.current.style.right = `unset`;
      tooltip.current.style.transform = "translateX(-50%)";

      const tooltipRect = tooltip.current.getBoundingClientRect();
      const containerRect = container.current.getBoundingClientRect();
      const wrapperRect = props.wrapperRef.current.getBoundingClientRect();

      if (["sm", "md"].includes(screen)) {
        tooltip.current.style.left = "50%";
        tooltip.current.style.right = `unset`;
        tooltip.current.style.top = `${
          containerRect.top - wrapperRect.top + containerRect.height / 3.1
        }px`;
        tooltip.current.style.transform = "translateX(-50%)";
      } else {
        if (tooltipRect.right > width - 20) {
          tooltip.current.style.left = "unset";
          tooltip.current.style.right = `0px`;
          tooltip.current.style.transform = "translateX(0)";
        }

        if (tooltipRect.left < 20) {
          tooltip.current.style.left = "0px";
          tooltip.current.style.transform = "translateX(0)";
        }
      }
    }
  }, [
    width,
    screen,
    tooltip.current,
    container.current,
    props.wrapperRef.current,
  ]);

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <div
      className={cn(
        `
          technology tw-inline-flex tw-h-[58px] tw-w-[157px] tw-max-w-[90vw]
          tw-flex-col tw-items-center tw-justify-center tw-rounded
          tw-bg-gradient-to-r tw-from-[var(--primary-default)]
          tw-to-[var(--primary-lighter)] tw-py-[15.27px] tw-text-[100px]
          tw-text-headings tw-transition-all tw-duration-200 tw-ease-in-out

          hover:tw-bg-gradient-to-r hover:tw-from-brown-500
          hover:tw-to-brown-200

          md:tw-h-[62px] md:tw-w-[188.35px] md:tw-text-[106px]

          xl:tw-h-[106.06px] xl:tw-w-[324px] xl:tw-text-[152px]
        `,
        !["sm", "md"].includes(screen) && "tw-relative"
      )}
      ref={container}
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
        ref={tooltip}
        className={cn(
          `
            tw-pointer-events-none tw-absolute tw-top-full tw-z-[2] tw-flex
            tw-h-0 tw-max-h-0 tw-w-[30rem] tw-max-w-[90vw] tw-flex-col
            tw-items-center tw-justify-start tw-overflow-hidden tw-rounded-lg
            tw-border-[1px] tw-border-solid tw-border-[var(--secondary-default)]
            tw-bg-gradient-to-b tw-text-headings tw-opacity-0
            tw-shadow-[0_5px_5px_rgba(0,0,0,0.26)] tw-transition-opacity
            tw-duration-200 tw-ease-in-out secondary-gradient-to-custom

            hover:tw-pointer-events-auto hover:tw-h-auto hover:tw-max-h-[unset]
            hover:tw-overflow-visible hover:tw-p-[20px] hover:tw-opacity-100
          `,
          isHovered &&
            `
              tw-pointer-events-auto tw-h-auto tw-max-h-[unset]
              tw-overflow-visible tw-p-[20px] tw-opacity-100
            `
        )}
      >
        <p className="p-small tw-text-center tw-font-bold tw-text-headings">
          {props.name}
        </p>
        <p className="p-smaller tw-text-center tw-font-light">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Technology;
