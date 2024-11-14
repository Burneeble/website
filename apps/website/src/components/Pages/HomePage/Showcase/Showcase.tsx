"use client";

import { Carousel, useClientInfoService } from "@burneeble/ui-components";
import { ShowcaseProps } from "./Showcase.types";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Showcase = (props: ShowcaseProps) => {
  //Hooks
  const { screen, width, isClient } = useClientInfoService();
  const bottomBars = useRef<Array<HTMLDivElement>>([]);

  //Effetcs
  useEffect(() => {
    if (!width || !isClient) return;

    const bars = ["top-bar-one", "top-bar-two", "top-bar-three"];

    let offset: number;

    switch (screen) {
      case "sm":
        offset = 335;
        break;
      case "md":
      case "lg":
        offset = 470;
        break;
      default:
        offset = 740;
        break;
    }

    const timeline = ["sm", "md", "lg"].includes(screen)
      ? gsap.context(() => {
          bars.forEach((bar) => {
            gsap.to(`.${bar}`, {
              x: `+=${width + offset}`,
              duration: 4 + Math.random() * 2,
              ease: "in",
              repeat: -1,
              delay: Math.random() * 3,
              modifiers: {
                x: (x) => `${parseFloat(x) % (width + offset)}px`,
              },
            });
          });
        })
      : null;

    return () => {
      timeline?.revert();
    };
  }, [width, isClient, screen]);

  useEffect(() => {
    if (!width || !isClient) return;

    const bars = ["bottom-bar-one", "bottom-bar-two", "bottom-bar-three"];

    let offset: number;

    switch (screen) {
      case "sm":
        offset = 335;
        break;
      case "md":
      case "lg":
        offset = 470;
        break;
      default:
        offset = 740;
        break;
    }

    const timeline = gsap.context(() => {
      bars.forEach((bar) => {
        gsap.to(`.${bar}`, {
          x: `+=${width + offset}`,
          duration: 4 + Math.random() * 2,
          ease: "in",
          repeat: -1,
          delay: Math.random() * 3,
          modifiers: {
            x: (x) => `${parseFloat(x) % (width + offset)}px`,
          },
        });
      });
    });

    return () => {
      timeline.revert();
    };
  }, [width, isClient, screen]);

  return (
    <section
      className={`
        showcase cs-section-structure tw-flex tw-h-fit tw-flex-col
        tw-items-center tw-justify-center tw-gap-2.5 tw-relative
      `}
    >
      {screen == "sm" ? (
        <div
          className={`
            bg-shadow tw-w-[400.78px] tw-h-[90%] tw-origin-top-left
            tw-rotate-[-30.59deg]
            tw-bg-[radial-gradient(_var(--secondary-lighter)_10%,_rgba(1,1,1,0)_80%)]
            tw-rounded-full tw-absolute tw-blur-[100px] -tw-left-[10rem]
            tw-top-[15rem] tw-z-[-1] tw-opacity-[.6]
          `}
        />
      ) : (
        <>
          <div
            className={`
              shape tw-w-[306px] tw-h-[307px] tw-left-0 -tw-translate-x-[40%]
              tw-top-[10rem] tw-opacity-[.4]

              xl:tw-w-[597] xl:tw-h-[597px] xl:tw-top-0 xl:-tw-left-[150px]
              xl:-tw-translate-y-[30%]
            `}
          />
          <div
            className={`
              shape tw-w-[257px] tw-h-[256px] tw-right-0 tw-translate-x-[40%]
              tw-top-[10rem] tw-opacity-[.6]

              xl:tw-w-[447] xl:tw-h-[447px] xl:tw-top-0 xl:-tw-right-[150px]
              xl:-tw-translate-y-[30%]
            `}
          />
        </>
      )}

      {["sm", "md", "lg"].includes(screen) && (
        <div className="top-bars tw-w-screen tw-h-[33.49px] tw-relative">
          <div
            className={`
              top-bar-one tw-w-[332.77px] tw-h-[3.56px] tw-top-0 tw-absolute
              tw-bg-[var(--primary-lighest)] tw-right-full

              md:tw-h-[5px] md:tw-w-[467px]
            `}
          />
          <div
            className={`
              top-bar-two tw-w-[128.98px] tw-h-[4.28px] tw-top-[12.11px]
              tw-absolute tw-bg-[var(--primary-lighter)] tw-opacity-[.27]
              tw-right-full

              md:tw-h-[5px] md:tw-w-[181px] md:tw-top-[17px]
            `}
          />
          <div
            className={`
              top-bar-three tw-w-[332.77px] tw-h-[3.56px] tw-top-[29.93px]
              tw-absolute tw-bg-[var(--primary-lighter)] tw-opacity-[.27]
              tw-right-full

              md:tw-h-[5px] md:tw-w-[467px] md:tw-top-[42px]
            `}
          />
        </div>
      )}

      <div
        className={`
          wrapper tw-flex tw-flex-col tw-items-center tw-justify-center
          tw-gap-[10px]

          xl:tw-gap-5
        `}
      >
        <div className={`title-wrapper tw-text-center`}>
          <h2 className={`title`}>
            Check out{" "}
            <span
              className={`
                cs-text-color-primary-gradient tw-font-normal tw-font-bowlby-one
              `}
            >
              our work
            </span>
            .
          </h2>
        </div>
        <Carousel
          projects={[
            {
              thumbnail: "https://picsum.photos/500",
              categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
            },
            {
              thumbnail: "https://picsum.photos/600",
              categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
            },
            {
              thumbnail: "https://picsum.photos/1920/1080",
              categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
            },
            {
              thumbnail: "https://picsum.photos/800/900",
              categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
            },
            {
              thumbnail: "https://picsum.photos/100",
              categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
            },
            {
              thumbnail: "https://picsum.photos/500/325",
              categories: ["Mint Dapp", "Crossmint Integration", "Ethereum"],
            },
          ]}
          cta={{
            children: "See All Projects",
            variant: "secondary",
            size: screen == "md" ? "lg" : "default",
          }}
        />
      </div>

      <div
        className={`
          bottom-bars tw-w-screen

          first-letter:tw-relative
        `}
      >
        <div
          className={`
            bottom-bar-one tw-right-full tw-top-0 tw-absolute
            tw-bg-[var(--primary-lighest)]
          `}
          ref={(el) => {
            if (el) bottomBars.current.push(el);
          }}
        />
        <div
          className={`
            bottom-bar-two tw-top-[-12.11px] tw-absolute
            tw-bg-[var(--primary-lighter)] tw-opacity-[.27] tw-right-full

            md:tw-top-[-17px]

            xl:tw-top-[27px]
          `}
          ref={(el) => {
            if (el) bottomBars.current.push(el);
          }}
        />
        <div
          className={`
            bottom-bar-three tw-right-full tw-top-[-29.93px] tw-absolute
            tw-bg-[var(--primary-lighter)] tw-opacity-[.27]

            md:tw-top-[-42px]

            xl:tw-top-[65px]
          `}
          ref={(el) => {
            if (el) bottomBars.current.push(el);
          }}
        />
      </div>
    </section>
  );
};

export default Showcase;
