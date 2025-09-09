"use client";

import { FlameIcon } from "@burneeble/icons";
import { LandingProps } from "./Landing.types";
import { useClientInfoService } from "@burneeble/ui-components";

const Landing = (props: LandingProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    // TODO remove vertical scrolling
    <section
      className={`
        gallery-landing-section tw-relative tw-top-8 tw-flex tw-h-[40vh]
        tw-items-center tw-justify-center

        xl:tw-h-[40vh]
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
        <h1
          className={`
            tw-whitespace-nowrap tw-text-center tw-text-4xl tw-font-normal
            tw-text-headings

            lg:tw-text-6xl

            md:tw-text-5xl
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
