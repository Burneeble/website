"use client";

import { Bars, Carousel, useClientInfoService } from "@burneeble/ui-components";
import { ShowcaseProps } from "./Showcase.types";
import { useRouter } from "next/navigation";

const Showcase = (props: ShowcaseProps) => {
  //Hooks
  const { screen } = useClientInfoService();
  const router = useRouter();

  return (
    <section
      className={`
        showcase tw-flex tw-h-fit tw-flex-col tw-items-center tw-justify-center
        tw-gap-2.5 tw-relative
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

      {["sm", "md", "lg"].includes(screen) && <Bars />}
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
