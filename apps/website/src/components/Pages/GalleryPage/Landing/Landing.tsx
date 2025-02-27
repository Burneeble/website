"use client";

import { FlameIcon } from "@burneeble/icons";
import { LandingProps } from "./Landing.types";
import { useClientInfoService } from "@burneeble/ui-components";

const Landing = (props: LandingProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <section
      className={`
        gallery-landing-section tw-flex tw-h-[622px] tw-items-center
        tw-justify-center

        xl:tw-h-[764px]
      `}
    >
      <div
        className={`
          tw-flex tw-h-[151px] tw-flex-col tw-items-center tw-justify-center
          tw-gap-2.5 tw-font-bowlby-one
        `}
      >
        <div className="tw-font-[60px]">
          <FlameIcon className="tw-h-[60px] tw-w-[60px]" />
        </div>
        <span
          className={`
            tw-whitespace-nowrap tw-text-center tw-text-5xl tw-font-normal
            tw-text-[var(--primary-lighter)] tw-opacity-70

            lg:tw-text-7xl

            md:tw-text-6xl
          `}
        >
          {["md", "sm", "lg"].includes(screen) ? (
            "Showcase"
          ) : (
            <>Discover our Showcase</>
          )}
        </span>
        <h1
          className={`
            tw-relative -tw-top-1/4 tw-text-center tw-font-normal
            tw-text-headings

            lg:-tw-top-[40%]

            md:-tw-top-[35%]
          `}
        >
          {["md", "sm", "lg"].includes(screen) ? (
            "Showcase"
          ) : (
            <>Discover our Showcase</>
          )}
        </h1>
      </div>
    </section>
  );
};

export default Landing;
