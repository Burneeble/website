"use client";

import {
  Bars,
  Carousel,
  CTA,
  useClientInfoService,
} from "@burneeble/ui-components";
import { ShowcaseProps } from "./Showcase.types";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const Showcase = (props: ShowcaseProps) => {
  //States
  const [showHover, setShowHover] = useState<boolean>(false);

  //Hooks
  const { screen } = useClientInfoService();
  const router = useRouter();
  const hoverLayer = useRef<HTMLDivElement>(null);

  //Effects
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (hoverLayer.current && !hoverLayer.current.contains(event.target)) {
        setShowHover(false);
      }
    };

    if (screen === "sm" || screen === "md")
      document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hoverLayer, screen]);

  return (
    <section
      id={"showcase"}
      className={`
        showcase tw-flex tw-h-fit tw-flex-col tw-items-center tw-justify-center
        cs-gap-between-text tw-relative
      `}
    >
      {screen == "sm" ? (
        <div
          className={`
            bg-shadow tw-absolute -tw-left-[10rem] tw-top-60 tw-z-[-1]
            tw-h-[90%] tw-w-[400.78px] tw-origin-top-left tw-rotate-[-30.59deg]
            tw-rounded-full
            tw-bg-[radial-gradient(_var(--secondary-lighter)_10%,_rgba(1,1,1,0)_80%)]
            tw-opacity-[.6] tw-blur-[100px]
          `}
        />
      ) : (
        <>
          <div
            className={`
              showcase-shape tw-left-0 tw-top-40 tw-h-[307px] tw-w-[306px]
              -tw-translate-x-[40%] tw-opacity-[.4]

              xl:-tw-left-[150px] xl:tw-top-0 xl:tw-h-[897px] xl:tw-w-[897px]
              xl:-tw-translate-y-[40%]
            `}
          />
          <div
            className={`
              showcase-shape tw-right-0 tw-top-40 tw-h-[256px] tw-w-[257px]
              tw-translate-x-[40%] tw-opacity-[.6]

              xl:-tw-right-[150px] xl:tw-top-0 xl:tw-h-[647px] xl:tw-w-[647px]
              xl:-tw-translate-y-1/2
            `}
          />
        </>
      )}

      {["sm", "md", "lg"].includes(screen) && <Bars />}
      <div className={`title-wrapper tw-text-center`}>
        <h2 className={`title`}>
          Check out{" "}
          <span
            className={`
              cs-text-color-primary-gradient tw-font-bowlby-one tw-font-normal
            `}
          >
            our work
          </span>
          .
        </h2>{" "}
      </div>
      <div
        className={`
          carousel-wrapper tw-w-full tw-max-w-[1200px] tw-px-5

          md:tw-px-0
        `}
      >
        <Carousel
          infinite
          raiseInactiveSlides
          labels={props.projects.map((proj) => {
            return proj.categories.length <= 3
              ? proj.categories
              : proj.categories.slice(0, 3);
          })}
          items={props.projects.map((proj, i) => {
            return (
              <div
                key={i}
                className={`
                  carousel-image-wrapper tw-relative tw-flex
                  tw-aspect-[1920/1080] tw-w-full tw-items-center
                  tw-justify-center tw-border-4 tw-border-solid
                  tw-border-primary tw-bg-black
                `}
              >
                <div
                  className={cn(
                    `
                      hover-layer tw-absolute tw-left-0 tw-top-0 tw-h-full
                      tw-w-full tw-bg-black/60 tw-opacity-0 tw-backdrop-blur-sm
                      tw-transition-all tw-duration-500 tw-ease-in-out

                      hover:tw-opacity-100
                    `,
                    (screen === "sm" || screen === "md") &&
                      showHover &&
                      "tw-opacity-100"
                  )}
                  onClick={() => {
                    if (screen === "sm" || screen === "md") {
                      setShowHover(true);
                    }
                  }}
                  ref={hoverLayer}
                >
                  <div
                    className={cn(
                      `
                        content tw-mx-auto tw-flex tw-h-full tw-w-full
                        tw-flex-col tw-items-center tw-justify-center
                        tw-gap-[10px]

                        md:tw-gap-[20px]
                      `,
                      screen === "sm" || screen === "md"
                        ? "tw-max-w-[95%]"
                        : "tw-max-w-[80%]"
                    )}
                  >
                    <h2
                      className={`
                        project-title tw-flex tw-items-center tw-gap-[10px]
                        tw-text-center tw-font-bowlby-one tw-text-2xl
                        tw-font-normal tw-text-headings

                        lg:tw-text-5xl

                        md:tw-text-4xl
                      `}
                    >
                      {proj.title}
                      <FontAwesomeIcon
                        onClick={() => {
                          window.open(proj.projectUrl, "_blank");
                        }}
                        icon={faArrowUpRightFromSquare}
                        className={`
                          tw-cursor-pointer tw-text-xl tw-text-primary
                          tw-transition-all tw-duration-200 tw-ease-in-out

                          hover:tw-brightness-125 hover:tw-filter

                          lg:tw-text-4xl

                          md:tw-text-3xl
                        `}
                      />
                    </h2>
                    <p
                      className={`
                        desc tw- tw-text-center tw-font-inter tw-text-md
                        tw-font-normal tw-text-body

                        lg:tw-text-2xl

                        md:tw-text-lg md:tw-leading-[35px]
                      `}
                    >
                      {proj.description}
                    </p>
                    <CTA
                      projectUrl={`/project/${proj.title
                        .toLowerCase()
                        .replace(/[^a-zA-Z0-9\s]/g, "")
                        .replaceAll(" ", "-")}`}
                      text={"View Details"}
                      size={
                        screen === "sm" || screen === "md" ? "sm" : "default"
                      }
                    />
                  </div>
                </div>
                <img
                  src={proj.thumbnailUrl}
                  alt={""}
                  width={1920}
                  height={1080}
                  className="carousel-image tw-h-full tw-w-auto"
                  loading="lazy"
                />
              </div>
            );
          })}
          cta={{
            children: "See All Projects",
            variant: "secondary",
            size: screen == "md" ? "lg" : "default",
            onClick: () => {
              router.push("/gallery");
            },
          }}
        />
      </div>
      <Bars />
    </section>
  );
};

export default Showcase;
