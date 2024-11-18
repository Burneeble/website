"use client";

import { Carousel, useClientInfoService } from "@burneeble/ui-components";
import { ShowcaseProps } from "./Showcase.types";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const Showcase = (props: ShowcaseProps) => {
  //States
  const [topBarsElements] = useState<JSX.Element>(
    <>
      {Array.from({ length: 5 }).map((_, i) => {
        const offset = Math.round(Math.random() * 100);

        return (
          <div
            key={i}
            className={cn(
              `
                top-bar tw-right-full tw-absolute

                md:tw-h-[5px] md:tw-w-[467px]

                xl:tw-h-[.5rem] xl:tw-w-[736px]
              `,
              offset > 40
                ? "tw-bg-[var(--primary-lighter)] tw-opacity-[.27]"
                : `tw-bg-[var(--primary-lighest)]`
            )}
            ref={(el) => {
              if (el && !topBars.current.includes(el)) topBars.current.push(el);
            }}
          />
        );
      })}
    </>
  );
  const [bottomBarsElements] = useState<JSX.Element>(
    <>
      {Array.from({ length: 5 }).map((_, i) => {
        const offset = Math.round(Math.random() * 100);

        return (
          <div
            key={i}
            className={cn(
              `
                bottom-bar tw-right-full tw-absolute

                md:tw-h-[5px] md:tw-w-[467px]

                xl:tw-h-[.5rem] xl:tw-w-[736px]
              `,
              offset % 2 === 0
                ? "tw-bg-[var(--primary-lighter)] tw-opacity-[.27]"
                : `tw-bg-[var(--primary-lighest)]`
            )}
            ref={(el) => {
              if (el && !bottomBars.current.includes(el))
                bottomBars.current.push(el);
            }}
          />
        );
      })}
    </>
  );

  //Hooks
  const { screen, width, isClient } = useClientInfoService();
  const topBars = useRef<Array<HTMLDivElement>>([]);
  const bottomBars = useRef<Array<HTMLDivElement>>([]);

  //Effetcs
  useEffect(() => {
    if (!width || !isClient || !topBars.current) return;

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
          topBars.current.forEach((bar) => {
            const randomY = Math.random() * 100;

            gsap.set(bar, { y: randomY });

            gsap.to(bar, {
              x: `+=${width + offset}`,
              duration: 3 + Math.random() * 3,
              ease: "in",
              repeat: -1,
              delay: Math.random() * 4,
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
  }, [width, isClient, screen, topBars]);

  useEffect(() => {
    if (!width || !isClient) return;

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
      bottomBars.current.forEach((bar) => {
        const randomY = Math.random() * 100;

        gsap.set(bar, { y: randomY });

        gsap.to(bar, {
          x: `+=${width + offset}`,
          duration: 3 + Math.random() * 3,
          ease: "in",
          repeat: -1,
          delay: Math.random() * 4,
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

  useEffect(() => {
    topBars.current = [];
  });

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
              showcase-shape tw-w-[306px] tw-h-[307px] tw-left-0
              -tw-translate-x-[40%] tw-top-[10rem] tw-opacity-[.4]

              xl:tw-w-[897px] xl:tw-h-[897px] xl:tw-top-0 xl:-tw-left-[150px]
              xl:-tw-translate-y-[40%]
            `}
          />
          <div
            className={`
              showcase-shape tw-w-[257px] tw-h-[256px] tw-right-0
              tw-translate-x-[40%] tw-top-[10rem] tw-opacity-[.6]

              xl:tw-w-[647px] xl:tw-h-[647px] xl:tw-top-0 xl:-tw-right-[150px]
              xl:-tw-translate-y-1/2
            `}
          />
        </>
      )}

      {["sm", "md", "lg"].includes(screen) && (
        <div className="top-bars tw-w-screen tw-h-[100px] tw-relative">
          {topBarsElements}
        </div>
      )}
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
        </h2>{" "}
      </div>
      <div className={`carousel-wrapper tw-w-full tw-max-w-full`}>
        <Carousel
          projects={props.projects}
          cta={{
            children: "See All Projects",
            variant: "secondary",
            size: screen == "md" ? "lg" : "default",
          }}
        />
      </div>
      <div
        className={`
          bottom-bars tw-w-screen tw-h-[100px]

          first-letter:tw-relative
        `}
      >
        {bottomBarsElements}
      </div>
    </section>
  );
};

export default Showcase;
